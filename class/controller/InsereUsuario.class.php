<?php

class InsereUsuario {
    public function controller() {
        try {
            // nome email usuario senha classificacao id
            $camposUsuario = array("usuario", "email", "senha");
            $insereUsuario = new Insere("usuario", $camposUsuario);
            $retornoUsuario = $insereUsuario->model();
            if($retornoUsuario["erro"]) {
                $retorno = $retornoUsuario;
                return $retorno;
            }

            $opcao = $_POST["classificacao"];
            if($opcao == "1") {
                // crud professor

            } else if ($opcao == "2") {
                // crud estudante
                $camposEstudante = array("nome", "email", "senha", "idUsuario");
                $_POST["idUsuario"] = $retornoUsuario["id"];
                $insereEstudante = new Insere("estudante", $camposEstudante);
                $retornoEstudante = $insereEstudante->model();
                if($retornoEstudante["erro"]) {
                    $retorno = $retornoEstudante;
                    return $retorno;
                }
                //$retorno["idUsuario"] = $retornoUsuario["id"];
                //$retorno["usuario"] = $_POST["usuario"];
                //$retorno["idEstudante"] = $retornoEstudante["id"];
                $retorno["erro"] = false;
                $retorno["msg"] = "Usuário criado com sucesso!\n";
                
            }
            
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao inserir o usuário\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>
