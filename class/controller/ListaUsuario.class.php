<?php

class ListaUsuario {
    public function controller() {
        $tabela = "usuario";
        $join = false;
        $colunas = array($tabela.".id", 
                         "usuario", 
                         "email"); 
        $template = "Usuario";
        return Lista::criarTabelaPessoa($tabela, $join, $colunas, $template);
    }
}

?>
