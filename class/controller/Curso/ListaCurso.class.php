<?php

class ListaCurso {

    public function controller() {
        try {
            $curso = new Template("view/Telas/Curso.tpl");
            $listaCurso = new Template("view/Telas/ListaCurso.tpl");
            $listaCurso->set("nome", "Ciências da Computação");
            $dadosCurso[] = $listaCurso;
            $listaCurso = new Template("view/Telas/ListaCurso.tpl");
            $listaCurso->set("nome", "Sistemas de Informação");
            $dadosCurso[] = $listaCurso;
            $listaCurso = new Template("view/Telas/ListaCurso.tpl");
            $listaCurso->set("nome", "Sistemas de Informação");
            $dadosCurso[] = $listaCurso;
            $listaCurso = new Template("view/Telas/ListaCurso.tpl");
            $listaCurso->set("nome", "Sistemas de Informação");
            $dadosCurso[] = $listaCurso;
            $listaCurso = new Template("view/Telas/ListaCurso.tpl");
            $listaCurso->set("nome", "Sistemas de Informação");
            $dadosCurso[] = $listaCurso;
            $listaCurso = new Template("view/Telas/ListaCurso.tpl");
            $listaCurso->set("nome", "Sistemas de Informação");
            $dadosCurso[] = $listaCurso;
            $curso->set("tabelaCurso", Template::juntar($dadosCurso));
            $retorno["erro"] = false;
            $retorno["msg"] = $curso->saida();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro no Curso";
        }
        return $retorno;
    }

}

?>