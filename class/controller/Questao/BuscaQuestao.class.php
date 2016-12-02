<?php

class BuscaQuestao {
    public function controller(){
        $id = $_POST["id"];
        
        $questao = ORM::for_table("questao")
                            ->where("id", $id)
                            ->find_array();
        $retorno["erro"] = false;
        $retorno["msg"] = $questao[0];
        return $retorno;
    }
}

?>