<?php

class ListaQuestao {

    public function controller() {
        try {
            $tabela = "questao";
            $colunas = array("id",
                             "nome");
            return Lista::criarTabelaQuestao($tabela, $colunas);
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro no Curso";
        }
        return $retorno;
    }

}

?>