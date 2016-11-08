<?php

class PerfilUsuario {
    public function controller() {
        try {
            $perfil= new Template("view/Usuario/EditaUsuario.tpl");
            ControlaSessao::iniciaSessao();
            if(!isset($_SESSION["nivel"])) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Nenhum usuário logado";
            }
            
            $id = $_SESSION["id"];
            if($_SESSION["nivel"] == 0) {
                // Admin
                $tabela = "usuario";
                $professor = "";
            } else if($_SESSION["nivel"] == 1) {
                // Professor
                $tabela = "professor";
                $professor = (new Template("view/Usuario/EditaUsuarioProfessor.tpl"))->saida();
            } else if($_SESSION["nivel"] == 2) {
                // Estudante
                $tabela = "estudante";
                $professor = "";
            }
            $perfil->set("PerfilProfessor", $professor);
            
            $resultado = Lista::buscaPorId($id, $tabela);
            if(!$resultado["erro"]) {
                $registro = $resultado["msg"];
                $perfil->set("id", $registro["id"]);
                $perfil->set("nome", $registro["nome"]);
                if($_SESSION["nivel"] == 1) {
                    $perfil->set("titulacao", $registro->titulacao);
                    $perfil->set("areaAtuacao", $registro->areaAtuacao);
                }
                
                if($_SESSION["nivel"] != 0) {
                    $resultadoUsuario = Lista::buscaPorId($registro["idUsuario"], "usuario");
                    if(!$resultadoUsuario["erro"]) {
                        $registro = $resultadoUsuario["msg"];
                    }
                }
                $perfil->set("email", $registro["email"]);
                
                $retorno["erro"] = false;
                $retorno["msg"] = $perfil->saida();
            } else {
                $retorno["erro"] = true;
                $retorno["msg"] = "Erro de processamento\n".$listaDados["msg"]."\n";
            }
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de processamento\n";
        }
        return $retorno;
    }
}

?>