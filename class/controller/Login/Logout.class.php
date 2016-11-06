<?php
    class Logout {
        public function controller() {
            try {
                ControlaSessao::iniciaSessao();
                if(isset($_SESSION["id"]) || isset($_POST["id"])) {
                    if(!isset($_POST["id"])) {
                        $_POST["id"] = $_SESSION["id"];
                    }
                    $controlador = new ControlaSessao();
                    $retorno = $controlador->fechaSessao();
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