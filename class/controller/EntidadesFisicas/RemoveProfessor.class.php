<?php

class RemoveProfessor {
    public function controller() {
        try {
            $remove = new Remove("professor");
            $retorno = $remove->model();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de remoção\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>

