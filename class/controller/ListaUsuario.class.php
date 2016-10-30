<?php

class ListaUsuario {
    public function controller() {
        try {
            $paginaListaUsuario = new Template("view/Usuario/ListaUsuario.tpl");
            
            $listaDados = new Lista("usuario");
            $resultado = $listaDados->model();
            if(!$resultado["erro"]) {
                foreach ($resultado["msg"] as $usuario) {
                    $linhaTabela = new Template("view/Usuario/ListaTabelaUsuario.tpl");
                    $linhaTabela->set("cod", $usuario->id);
                    $linhaTabela->set("nome", $usuario->nome);
                    $linhaTabela->set("email", $usuario->email);
                    $linhaTabela->set("usuario", $usuario->usuario);
                    $usuarios[] = $linhaTabela;
                }
                
                $paginaListaUsuario->set("tabela", Template::juntar($usuarios));
                $retorno["erro"] = false;
                $retorno["msg"] = $paginaListaUsuario->saida();
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
