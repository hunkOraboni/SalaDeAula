<?php
    function __autoload($classe) {
	$pastas = array('model', 'controller', 'controller/Login', 'controller/EntidadesFisicas', 'controller/Curso');
	foreach ($pastas as $pasta) {
            if (file_exists("class/{$pasta}/{$classe}.class.php")) {
                include_once "class/{$pasta}/{$classe}.class.php";
            }
	}
    }

    class Aplicacao {
	public static function run() {
            // Monta Conteúdo
            $layout = new Template("view/Telas/layoutInicial.tpl");
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
                $layout = new Template("view/layout.tpl");
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

