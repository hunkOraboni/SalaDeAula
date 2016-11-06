<?php
class Altera {
    public static function alterarRegistro($tabela, $id, $valores) {
        try {
            $registro = ORM::for_table($tabela)->find_one($id);
            $registro->set($valores);
            $registro->save();
            $retorno["erro"] = false;
            $retorno["msg"] = "Alteração realizada com sucesso!";
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro de alteração\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}
?>
