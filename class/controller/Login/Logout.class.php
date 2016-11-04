<?php
    class Logout {
        public function controller() {
            try {
                ControlaSessao::iniciaSessao();
                if(isset($_SESSION["id"]) || isset($_POST["id"])) {
                    if(!isset($_POST["id"])) {
                        $_POST["id"] = $_SESSION["id"];
                    }
                    $buscaUsuario = new Busca("usuario");
                    $resultado = $buscaUsuario->model();
                    if(!$resultado["erro"]) {
                        $_POST["logado"] = 0;
                        $altera = new Altera("usuario", ["logado"]);
                        $resultadoAltera = $altera->model();
                        if(!$resultadoAltera["erro"]) {
                            $controle = new ControlaSessao();
                            $retorno = $controle->fechaSessao();
                        } else {
                            $retorno["erro"] = true;
                            $retorno["msg"] = "Nao foi possivel fazer o logout.";
                        }
                    } else {
                        $controlador = new ControlaSessao();
                        $retorno = $controlador->fechaSessao();
                    }
                } else {
                    $retorno["erro"] = true;
                    $retorno["msg"] = "Nenhum usuario logado.";
                }
            } catch (Exception $ex) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Erro, logout nao realizado.";
            }
            return $retorno;
        }
    }
?>