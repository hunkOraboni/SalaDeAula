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
                    $retorno["nivel"] = $_SESSION["nivel"];
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
                $id = $_SESSION["id"];
                $login = $_SESSION["usuario"];
                $usuario = ORM::for_table("usuario")
                            ->where(array("usuario" => $login, "id" => $id))
                            ->find_one();
                if($usuario) {
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
                $login = $_POST["login"];
                $senha = $_POST["senha"];
                //$senha = hash("sha256", $_POST["senha"], NULL); // HASH NA SENHA
                
                // Busca usuário
                $usuario = ORM::for_table("usuario")
                            ->where(array("usuario" => $login, "senha" => $senha))
                            ->find_one();

                // Se o usuário existir...
                if($usuario) { 
                    // Configura os cookies do usuário
                    $_SESSION["usuario"] = $usuario->usuario;
                    $_SESSION["id"] = $usuario->id;

                    // Procura o usuário na tabela de estudantes
                    $estudante = ORM::for_table("estudante")
                                    ->where("idUsuario", $usuario->id)
                                    ->find_one();
                    
                    // Se o estudante existir...
                    if($estudante) {
                        // Nível 2 = estudante
                        $_SESSION["nivel"] = 2; 
                    } else {
                        // Procura o usuário na tabela de professores
                        $professor = ORM::for_table("professor")
                                    ->where("idUsuario", $usuario->id)
                                    ->find_one();

                        // Nível 1 = professor - se encontrar um registro
                        // Nível 0 = administrador - se não encontrar nenhum registro
                        $_SESSION["nivel"] = $professor ? 1 : 0;
                    }

                    $_SESSION["inicio"] = time();
                    $retorno["erro"] = false;
                    $retorno["msg"] = "Usuário " . $usuario->usuario . " logado com sucesso";
                    $retorno["usuario"] = $usuario->usuario;
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
            //var_dump($_POST);
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