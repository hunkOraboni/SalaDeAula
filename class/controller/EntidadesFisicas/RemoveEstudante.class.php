<?php

class RemoveEstudante {
    public function controller() {
        try {
            $remove = new Remove("estudante");
            $retorno = $remove->model();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de remoção\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>
