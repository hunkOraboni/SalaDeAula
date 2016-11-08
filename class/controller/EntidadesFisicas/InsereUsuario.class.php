<?php

class InsereUsuario {
    public function controller() {
        try {
            $usuario = ORM::for_table("usuario")->create();
            $usuario->usuario = $_POST["usuario"];
            $usuario->email = $_POST["email"];
            $usuario->senha = $_POST["senha"];
            $usuario->save();
            $opcao = $_POST["classificacao"];
            if($opcao == "1") {
                // CRUD Professor
                $professor = ORM::for_table("professor")->create();
                $professor->nome = $_POST["nome"];
                $professor->titulacao = $_POST["titulacao"];
                $professor->areaAtuacao = $_POST["areaAtuacao"];
                $professor->idUsuario = $usuario->id();
                $professor->save();
            } else if ($opcao == "2") {
                // CRUD Estudante
                $estudante = ORM::for_table("estudante")->create();
                $estudante->nome = $_POST["nome"];
                $estudante->idUsuario = $usuario->id();
                $estudante->save();
            }
            $retorno["erro"] = false;
            $retorno["msg"] = "Usuário criado com sucesso!\n";
            
        } catch (Exception $ex) {
            $retorno["erro"] = true;
            $retorno["msg"] = "Erro ao inserir o usuário\n".$ex->getMessage()."\n";
        }
        return $retorno;
    }
}

?>
