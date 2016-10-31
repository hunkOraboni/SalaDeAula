<?php

class InsereUsuario {
    public function controller() {
        try {
            $campos = array("nome", "email", "usuario", "senha");
            $insere = new Insere("usuario", $campos);
            $retorno = $insere->model();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao inserir o usuário\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>
