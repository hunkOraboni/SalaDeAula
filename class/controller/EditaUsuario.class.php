<?php
class EditaUsuario {
    public function controller() {
        try {
            $campos = array("nome", "email", "usuario", "senha");
            $altera = new Altera("usuario", $campos);
            $retorno = $altera->model();
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de alteração\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}
?>