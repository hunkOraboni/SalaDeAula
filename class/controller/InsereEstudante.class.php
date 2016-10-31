<?php

class InsereEstudante {
    public function controller() {
        try {
            $campos = array("nome", "email", "usuario", "senha");
            $insere = new Insere("estudante", $campos);
            $retorno = $insere->model();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao inserir o estudante\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>