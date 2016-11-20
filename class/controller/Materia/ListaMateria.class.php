<?php

class ListaMateria {

    public function controller() {
        try {
            $tabela = "materia";
            $join = false;
            $colunas = array("id",
                             "nome", 
                             "descricao");
            $template = "Materia";
            return Lista::criarTabelaPessoa($tabela, $join, $colunas, $template);
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro na Materia";
        }
        return $retorno;
    }

}

?>