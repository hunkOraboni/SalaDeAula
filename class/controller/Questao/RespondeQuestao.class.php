<?php

class RespondeQuestao {
    public function controller() {
        try {
            $id = $_GET["id"];
            
            $resultado = Lista::buscaPorId($id, "questao");
            if($resultado["erro"]) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Questão não encontrada\n";
                return $retorno;
            }
            $pagina = new Template("view/Questao/RespondeQuestao.tpl");
            $questao = $resultado["msg"];
            
            $pagina->set("nome", $questao["nome"]);
            $pagina->set("enunciado", $questao["questao"]);
            $pagina->set("a", $questao["a"]);
            $pagina->set("b", $questao["b"]);
            $pagina->set("c", $questao["c"]);
            $pagina->set("d", $questao["d"]);
            $pagina->set("id", $id);
            
            $retorno["erro"] = false;
            $retorno["msg"] = $pagina->saida();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao responder a questao\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>