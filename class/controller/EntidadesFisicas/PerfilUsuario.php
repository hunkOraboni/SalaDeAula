<?php

class PerfilUsuario {
    public function controller() {
        try {
            $perfil= new Template("view/Usuario/Perfil.tpl");
            $listaDados = new Lista("estudante");
            $resultado = $listaDados->model();
            if(!$resultado["erro"]) {
                $perfil->set("cod", $estudante->id);
                $perfil->set("nome", $estudante->nome);
                $perfil->set("email", $estudante->email);

                // Busca usuário
                $_POST["id"] = $estudante->idUsuario;
                $buscaUsuario = new Busca("usuario");
                $resultadoBusca = $buscaUsuario->model();
                if(!$resultadoBusca["erro"]) {
                    $linhaTabela->set("usuario", $resultadoBusca["msg"]->usuario);
                }
                //$linhaTabela->set("usuario", $estudante->usuario);
                $estudantes[] = $linhaTabela;
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