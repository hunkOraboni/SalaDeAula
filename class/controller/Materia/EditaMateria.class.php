<?php

class EditaMateria {
    public function controller(){
        $tabela = "materia";
        $id = $_POST["id"];
        $campos = array("nome", "descricao");
        $valores = array();
        foreach($campos as $campo) {
            $valores[$campo] = $_POST[$campo];
        }
        $retorno = Altera::alterarRegistro($tabela, $id, $valores);
        return $retorno;
    }
}

?>