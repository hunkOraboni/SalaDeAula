<?php

class ListaEstudante {
    public function controller() {
        try {
            $paginaListaEstudante= new Template("view/Usuario/ListaEstudante.tpl");
            
            $listaDados = new Lista("estudante");
            $resultado = $listaDados->model();
            if(!$resultado["erro"]) {
                foreach ($resultado["msg"] as $estudante) {
                    $linhaTabela = new Template("view/Usuario/ListaTabelaEstudante.tpl");
                    $linhaTabela->set("cod", $estudante->id);
                    $linhaTabela->set("nome", $estudante->nome);
                    $linhaTabela->set("email", $estudante->email);
                    $linhaTabela->set("usuario", $estudante->usuario);
                    $estudantes[] = $linhaTabela;
                }
                
                $paginaListaEstudante->set("tabela", Template::juntar($estudantes));
                $retorno["erro"] = false;
                $retorno["msg"] = $paginaListaEstudante->saida();
            } else {
                $retorno["erro"] = true;
                $retorno["msg"] = "Erro de processamento\n".$listaDados["msg"]."\n";
            }
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de processamento\n";
        }
        return $retorno;
    }
}

?>
