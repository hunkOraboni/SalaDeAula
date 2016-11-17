<?php

class ListaProfessor {
    public function controller() {
        $tabela = "professor";
        $join = true;
        $colunas = array($tabela.".id", 
                         "idUsuario", 
                         "nome", 
                         "usuario", 
                         "email", 
                         "titulacao", 
                         "areaAtuacao");
        $template = "Professor";
        return Lista::criarTabelaPessoa($tabela, $join, $colunas, $template);
    }
}

?>
