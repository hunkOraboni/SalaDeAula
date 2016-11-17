<?php

class EditaPerfilUsuario {
    public  function pegaTabela() {
        if($_SESSION["nivel"] == 0) {
            // Admin
            $tabela = "usuario";
        } else if($_SESSION["nivel"] == 1) {
            // Professor
            $tabela = "professor";
        } else if($_SESSION["nivel"] == 2) {
            // Estudante
            $tabela = "estudante";
        }
        return $tabela;
    }

    public function controller() {
        ControlaSessao::iniciaSessao();
        // IMPORTANTE, ALTERAR, PARA VERIFICAÇAO CORRETA
        $id = $_SESSION["id"];
        $tabela = $this->pegaTabela();
        $resultado = Lista::buscaPorId($id, $tabela);
        if(!$resultado["erro"]) {
            $usuarioLogado = $resultado["msg"];
            
            $id = $usuarioLogado["idUsuario"];
            $idUsuarioLogado = $id;
            $tabela = "usuario";
            $resultado = Lista::buscaPorId($id, $tabela);
            $usuarioLogado = $resultado["msg"];
            
            if($usuarioLogado["senha"] !== $_POST["senhaAtual"]) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Senha incorreta";
                return $retorno;
            }
        } else {
            $retorno["erro"] = true;
            $retorno["msg"] = "Usuário não encontrado";
            return $retorno;
        }
        
        if($_SESSION["nivel"] == 0) {
            // Admin
            $campos = array("email", "senha");
        } else if($_SESSION["nivel"] == 1) {
            // Professor
            $campos = array("nome", "titulacao", "areaAtuacao");
        } else if($_SESSION["nivel"] == 2) {
            // Estudante
            $campos = array("nome");
        }
        
        $id = $_POST["id"];
        $tabela = $this->pegaTabela();
        $valores = array();
        foreach($campos as $campo) {
            $valores[$campo] = $_POST[$campo];
        }
        
        $retorno = Altera::alterarRegistro($tabela, $id, $valores);
        
        if(!$retorno["erro"]) {
            $tabela = "usuario";
            $id = $idUsuarioLogado;
            $campos = array("email", "senha");
            $valores = array();
            foreach($campos as $campo) {
                if($campo == "senha") {
                    if($_POST["senhaNova"] != "") {
                        $valores[$campo] = $_POST["senhaNova"];
                    } else {
                        $valores[$campo] = $_POST["senhaAtual"];
                    }
                } else {
                    $valores[$campo] = $_POST[$campo];
                }
            }
            $retorno = Altera::alterarRegistro($tabela, $id, $valores);
        }
        return $retorno;
    }
}

?>