<?php

class ListaCurso {

    public function controller() {
        try {
            $tabela = "curso";
            $join = false;
            $colunas = array("id",
                             "nome", 
                             "descricao");
            $template = "Curso";
            return Lista::criarTabelaPessoa($tabela, $join, $colunas, $template);
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro no Curso";
        }
        return $retorno;
    }

}

?>