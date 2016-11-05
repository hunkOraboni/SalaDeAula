<?php

class EditaUsuario {
    public function controller() {
        $tabela = "usuario";
        $id = $_POST["id"];
        $campos = array("email", "usuario");
        $valores = array();
        foreach($campos as $campo) {
            $valores[$campo] = $_POST[$campo];
        }
        $retorno = Altera::alterarRegistro($tabela, $id, $valores);

        return $retorno;
    }
}

?>