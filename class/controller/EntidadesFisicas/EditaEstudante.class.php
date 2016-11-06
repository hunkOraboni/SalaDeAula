<?php
class EditaEstudante {
    public function controller() {
        $tabela = "estudante";
        $id = $_POST["id"];
        $campos = array("nome");
        $valores = array();
        foreach($campos as $campo) {
            $valores[$campo] = $_POST[$campo];
        }
        $retorno = Altera::alterarRegistro($tabela, $id, $valores);

        if(!$retorno["erro"]) {
            $tabela = "usuario";
            $id = $_POST["idUsuario"];
            $campos = array("email", "usuario");
            $valores = array();
            foreach($campos as $campo) {
                $valores[$campo] = $_POST[$campo];
            }
            $retorno = Altera::alterarRegistro($tabela, $id, $valores);
        }

        return $retorno;
    }
}
?>
