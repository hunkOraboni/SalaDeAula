<?php

class InsereUsuario {
    public function controller() {
        try {
            $camposUsuario = array("usuario", "email", "senha");
            $insereUsuario = new Insere("usuario", $camposUsuario);
            $retornoUsuario = $insereUsuario->model();
            var_dump($retornoUsuario);
            if($retornoUsuario["erro"]) {
                $retorno = $retornoUsuario;
                return $retorno;
            }
            $retorno = $retornoUsuario;
            /*
            $retorno["id_usuario"] = $retornoUsuario["id"];

            $opcao = $_POST["classificacao"];
            if($opcao == "1") {
                // crud professor

            } else if ($opcao == "2") {
                // crud estudante
                $camposEstudante = array("nome", "email", "senha", "id");
                $_POST["id"] = $retornoUsuario["id"];
                $insereEstudante = new Insere("estudante", $camposEstudante);
                $retornoEstudante = $insereEstudante->model();
                var_dump($retornoEstudante);
                if($retornoEstudante["erro"]) {
                    $retorno = $retornoEstudante;
                    return $retorno;
                }
                $retorno["erro"] = false;
                $retorno["id_estudante"] = $retornoEstudante["id"];
                $retorno["msg"] = "Usuário criado com sucesso!\n";
                
            }
            */
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao inserir o usuário\n".$ex->getMessage()."\n";
        }
        var_dump($retorno);
        return $retorno;
    }
}

?>
