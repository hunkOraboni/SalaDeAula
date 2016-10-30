<?php
    function __autoload($classe) {
	$pastas = array('model', 'controller');
	foreach ($pastas as $pasta) {
            if (file_exists("class/{$pasta}/{$classe}.class.php")) {
                include_once "class/{$pasta}/{$classe}.class.php";
            }
	}
    }

    class Aplicacao {
	public static function run() {
            $layout = new Template("view/layout.tpl");
            // Monta Conteúdo
            $conteudo = "";
            if(isset($_GET["acao"])) {
                $class = $_GET["acao"];
                if(class_exists($class)) {
                    Transacao::open();
                    $pagina = new $class;
                    $retorno = $pagina->controller();
                    if($retorno["erro"]) {
                        Transacao::rollback();
                    }
                    else {
                        Transacao::close();
                    }
                    $conteudo = $retorno["msg"];
                }
            } else {
                // Pagina Inicial
                $paginaInicial = new Template("view/PaginaInicial.tpl");
                $formLogin = new Template("view/Usuario/FormLogin.tpl");
                $layout->set("formLogin", $formLogin->saida());
                $conteudo = $paginaInicial->saida();
            }
            // Conteúdo até aqui

            $layout->set("conteudo",$conteudo);
            echo $layout->saida();
	}
    }
    Aplicacao::run();
?>

