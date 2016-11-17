<?php
class Lista {
    
    public static function buscaPorId($id, $tabela){
        $registro = ORM::for_table($tabela)->where("id", $id)->find_array();
        if(!$registro) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Nenhum valor encontrado!";
            return $retorno;
        }
        $retorno["erro"] = false;
        $retorno["msg"] = $registro[0];
        return $retorno;
    }

    public static function criarTabelaPessoa($tabela, $join, $colunas, $template) {
        try {
            $paginaLista = new Template("view/Usuario/Lista".$template.".tpl");

            if(ORM::for_table($tabela)->count() == 0) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Nenhum valor encontrado!";
            }
            else {
                if($join) {
                    $registros = ORM::for_table($tabela)
                        ->select_many($colunas)
                        ->join("usuario", array($tabela.".idUsuario", "=", "usuario.id"))
                        ->find_many();
                } else {
                    $registros = ORM::for_table($tabela)->find_many();
                }
                
                foreach ($registros as $registro) {
                    $linhaTabela = new Template("view/Usuario/ListaTabela".$template.".tpl");
                    foreach ($colunas as $coluna) {
                        // se a coluna tiver ".id" no nome, chame-a de "id"
                        // previne colunas ambíguas
                        if(strpos($coluna, ".id") !== false) {
                            $coluna = "id";
                        }
                        $linhaTabela->set($coluna, $registro->get($coluna));
                    }
                    $linhas[] = $linhaTabela;
                }

                $paginaLista->set("tabela", Template::juntar($linhas));
                $retorno["erro"] = false;
                $retorno["msg"] = $paginaLista->saida();
            }
        } catch(Exception $e) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Ocorreu um erro entre em contato com o Administrador " . 
                                $e->getMessage();
        }
        return $retorno;
    }
}
?>
