<?php

class ListaProfessor {
    public function controller() {
        try {
            $paginaListaProfessor = new Template("view/Usuario/ListaProfessor.tpl");
            
            $listaDados = new Lista("professor");
            $resultado = $listaDados->model();
            if(!$resultado["erro"]) {
                foreach ($resultado["msg"] as $professor) {
                    $linhaTabela = new Template("view/Usuario/ListaTabelaProfessor.tpl");
                    $linhaTabela->set("cod", $professor->id);
                    $linhaTabela->set("nome", $professor->nome);
                    $linhaTabela->set("email", $professor->email);
                    $linhaTabela->set("titulacao", $professor->titulacao);
                    $linhaTabela->set("areaAtuacao", $professor->areaAtuacao);
                    
                    // Busca usuário
                    $_POST["id"] = $professor->idUsuario;
                    $buscaUsuario = new Busca("usuario");
                    $resultadoBusca = $buscaUsuario->model();
                    if(!$resultadoBusca["erro"]) {
                        $linhaTabela->set("usuario", $resultadoBusca["msg"]->usuario);
                    }
                    //$linhaTabela->set("usuario", $estudante->usuario);
                    $professores[] = $linhaTabela;
                }
                
                $paginaListaProfessor->set("tabela", Template::juntar($professores));
                $retorno["erro"] = false;
                $retorno["msg"] = $paginaListaProfessor->saida();
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
