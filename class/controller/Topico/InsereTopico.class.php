<?php

class InsereTopico {
    public function controller() {
        try {
            $topico = ORM::for_table("topico")->create();
            $topico->nome = $_POST["nome"];
            $topico->descricao = $_POST["descricao"];
            $topico->save();
            $retorno["erro"] = false;
            $retorno["msg"] = "Topico criado com sucesso";
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao criar o topico\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>