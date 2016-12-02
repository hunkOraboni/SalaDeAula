<?php

class EditaQuestao {
    public function controller(){
        $tabela = "questao";
        $id = $_POST["id"];
        $campos = array("nome", "questao", "a", "b", "c","d");
        $valores = array();
        foreach($campos as $campo) {
            $valores[$campo] = $_POST[$campo];
        }
        $retorno = Altera::alterarRegistro($tabela, $id, $valores);
        return $retorno;
    }
}

?>