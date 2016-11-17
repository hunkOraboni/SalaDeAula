<?php

class ListaEstudante {
    public function controller() {
        $tabela = "estudante";
        $join = true;
        $colunas = array($tabela.".id", 
                         "idUsuario", 
                         "nome", 
                         "usuario", 
                         "email");
        $template = "Estudante";
        return Lista::criarTabelaPessoa($tabela, $join, $colunas, $template);
    }
}

?>
