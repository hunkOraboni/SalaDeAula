<?php



class InsereProfessor {
    public function controller() {
        try {
            // nome email usuario senha classificacao id
            $campos = array("nome", "email", "senha", "titulacao", "areaAtuacao", "usuario");
            $insere = new Insere("usuario", $campos);
            $retorno = $insere->model();
            
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao inserir o usuário\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>

