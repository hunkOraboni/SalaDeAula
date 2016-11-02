<?php
class EditaProfessor {
    public function controller() {
        try {
            $campos = array("nome", "email", "senha", "titulacao", "areaAtuacao", "usuario");
            $altera = new Altera("professor", $campos);
            $retorno = $altera->model();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de alteração\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}
?>
