<?php

class InsereQuestao {
    public function controller() {
        try {
            $questao = ORM::for_table("questao")->create(); 
            
            
            $questao->nome = $_POST["nome"];
            $questao->questao = $_POST["nome"];
            $questao->resposta = $_POST["resposta"];
            $questao->a = $_POST["respostaA"];
            $questao->b = $_POST["respostaB"];
            $questao->c = $_POST["respostaC"];
            $questao->d = $_POST["respostaD"];
            
            $questao->save();
            $retorno["erro"] = false;
            $retorno["msg"] = "Materia criada com sucesso";
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao criar a materia\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>