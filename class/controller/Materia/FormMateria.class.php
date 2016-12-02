<?php

class FormMateria {
    public function controller() {
        try {
            $template = new Template("view/Telas/InsereMateria.tpl");
            $retorno["erro"] = false;
            $retorno["msg"] = $template->saida();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao visualizar o form do materia\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>