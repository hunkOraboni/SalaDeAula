<?php

class BuscaCurso {
    public function controller(){
        $id = $_POST["id"];
        $tabela = "curso";
        return Lista::buscaPorId($id, $tabela);
    }
}

?>