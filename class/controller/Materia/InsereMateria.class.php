<?php

class InsereMateria {
    public function controller() {
        try {
            $liga_Curso_Materia = ORM::for_table("liga_curso_materia")->create(); 
            $liga_Curso_Materia->idCurso = $_POST["idCurso"];
            $materia = ORM::for_table("materia")->create();
            $materia->nome = $_POST["nome"];
            $materia->descricao = $_POST["descricao"];
            $materia->save();
            $liga_Curso_Materia->idMateria = $materia->id;
            $liga_Curso_Materia->save();
            $retorno["erro"] = false;
            $retorno["msg"] = "Materia criada com sucesso";
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao criar a materia\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>