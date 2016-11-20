<?php

class BuscaMateria {
    public function controller(){
        $id = $_POST["id"];
        $tabela = "materia";
        return Lista::buscaPorId($id, $tabela);
    }
}

?>