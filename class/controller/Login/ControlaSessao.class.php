<?php
    class ControlaSessao {
        private $tempoSessao = 3600;
        
        public function controller() {
        }
        
        public static function iniciaSessao() {
            if(isset($_SESSION)) {
                if(!(session_name() === "SalaDeAula")) {
                    session_cache_limiter("public");
                    session_name("SalaDeAula");
                    session_start();
                }
            } else {
                session_cache_limiter("public");
                session_name("SalaDeAula");
                session_start();
            }
        }
        
        public function tempoSessao() {
            $inicio = $_SESSION["inicio"];
            if((time() - $inicio) > $this->tempoSessao) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Tempo limite atingido, sessão expirada";
            } else {
                $retorno["erro"] = false;
                $retorno["msg"] = "Sessão dentro do tempo";
            }
            return $retorno;
        }
        
        public function renovaSessao() {
            $_SESSION["inicio"] = time();
        }
        
        public function statusSessao() {
            //session_start();
            //var_dump($_SESSION);
            if(isset($_SESSION)) {
                if(isset($_SESSION["usuario"])) {
                    if(time() - $_SESSION["inicio"] <= $this->tempoSessao) {
                        $retorno["erro"] = false;
                        $retorno["msg"] = "Usuário ". $_SESSION["usuario"] . " logado.";
                        $this->renovaSessao();
                    } else {
                        //$logout = new Logout();
                        //$resultadoLogout = $logout->controler();
                        //if(!$resultadoLogout["erro"]) {
                        $retorno["erro"] = true;
                        $retorno["msg"] = "Tempo esgotado";
                        ////$this->fechaSessao();
                        //} else {
                            
                        //}
                    }
                } else {
                    $retorno["erro"] = true;
                    $retorno["msg"] = "Nenhum usuário logado.";
                }
            } else {
                $retorno["erro"] = true;
                $retorno["msg"] = "Nenhum usuário logado.";
            }
            return $retorno;
        }

        public function fechaSessao() {
            //session_start();
            session_unset();
            session_destroy();
            $retorno["erro"] = false;
            $retorno["msg"] = "Sessao finalizada com sucesso.";
            return $retorno;
        }
    }
?>