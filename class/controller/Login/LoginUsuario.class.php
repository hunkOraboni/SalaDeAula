<?php
    class LoginUsuario {
        
        // Usado para Verificação do Login nas classes
        /*$verificaLogin = new VerificaLogin("Docente");
        $resultadoVerificaLogin = $verificaLogin->controler();
        if($resultadoVerificaLogin["erro"]) {
            return $resultadoVerificaLogin;
        }*/
        
        public function status($controlador) {
            $retornoStatus = $controlador->statusSessao();
            if(!$retornoStatus["erro"]) {
                $statusBD = $this->statusBD();
                if(!$statusBD["erro"]) {
                    $retorno = $retornoStatus;
                    $retorno["usuario"] = $_SESSION["usuario"];
                    //$retorno["nivel"] = $_SESSION["nivel"];
                } else {
                    $retorno = $statusBD;
                }
            } else {
                $retorno = $retornoStatus;
            }
            return $retorno;
        }
        
        public function statusBD() {
            try {
                //id=8 AND usuario="Gabriel"
                $id = $_SESSION["id"];
                $busca = new Busca("usuario");
                $usuario = $_SESSION["usuario"];
                $condicao = "usuario = '$usuario' AND id='$id';";
                $busca->setCondicao($condicao);
                $resultado = $busca->model();
                if(!$resultado["erro"]) {
                    $retorno["erro"] = false;
                    $retorno["msg"] = "Usuário logado";
                } else {
                    $retorno["erro"] = true;
                    $retorno["msg"] = "Usuário não logado";
                }
            } catch (Exception $e) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Ocorreu um erro: ".$e->getMessage();
            }
            return $retorno;
        }
        
        public function fazLogin() {
            try {
                $conexao = Transacao::get();
                $busca = new Busca("usuario");
                $login = $_POST["login"];
                //$senha = hash("sha256", $_POST["senha"], NULL); // HASH NA SENHA
                $senha = $_POST["senha"];
                $condicao = "usuario = '$login' AND senha='$senha';";
                //$condicao = "usuario = '$usuario' AND senha = '$senha';";
                $busca->setCondicao($condicao);
                $retornoBusca = $busca->model();
                if(!$retornoBusca["erro"]) {
                    //$_SESSION["usuario"] = $_POST["usuario"];
                    $_SESSION["usuario"] = $login;
                    $_SESSION["id"] = $retornoBusca["msg"]->id;
                    //$_SESSION["nivel"] = $retornoBusca["msg"]->nivel;
                    $_SESSION["inicio"] = time();
                    $retorno["erro"] = false;
                    $retorno["msg"] = "Usuário " . $_SESSION["usuario"] . " logado com sucesso";
                    $retorno["usuario"] = $_SESSION["usuario"];
                    //$retorno["nivel"] = $_SESSION["nivel"];
                } else {
                    $retorno["erro"] = true;
                    $retorno["msg"] = "Usuário não encontrado";
                }
            } catch (Exception $e) {
                $retorno["erro"] = true;
                $retorno["msg"] = $e->getMessage();
            }
            return $retorno;
        }

        public function controller() {
            ControlaSessao::iniciaSessao();
            $controlador = new ControlaSessao();
            var_dump($_POST);
            if(isset($_POST["login"]) && isset($_POST["senha"])) {
                $retorno = $this->fazLogin();
            } else {
                $retorno = $this->status($controlador);
            }
            if($retorno["erro"]) {
                $controlador->fechaSessao();
            }
            /*if(isset($_POST["status"])) {
                $retorno = $this->status($controlador);
            } else if(isset($_POST["usuario"]) && isset($_POST["senha"])) {
                $retorno = $this->fazLogin();
            }*/
            //$controlador->fechaSessao();
            return $retorno;
        }
    }
?>