<?php

class BuscaTopico {
    public function controller(){
        $id = $_POST["id"];
        $tabela = "topico";
        return Lista::buscaPorId($id, $tabela);
    }
}

?>