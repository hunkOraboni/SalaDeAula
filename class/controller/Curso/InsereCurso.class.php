<?php

class CriaCurso {
    public function controller() {
        try {
            $curso = ORM::for_table("curso")->create();
            $curso->nome = $_POST["nome"];
            $curso->descricao = $_POST["descricao"];
            $curso->save();
            $retorno["erro"] = false;
            $retorno["msg"] = "Curso criado com sucesso";
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao criar o curso\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>