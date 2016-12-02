<?php

class ListaTopico {

    public function controller() {
        try {
            $tabela = "topico";
            $join = false;
            $colunas = array("id",
                             "nome", 
                             "descricao");
            $template = "Topico";
            return Lista::criarTabelaPessoa($tabela, $join, $colunas, $template);
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro no Topico";
        }
        return $retorno;
    }

}

?>