<?php
    function __autoload($classe) {
	$pastas = array('model', 'controller');
	foreach ($pastas as $pasta) {
            if (file_exists("{$pasta}/{$classe}.class.php")) {
                include_once "{$pasta}/{$classe}.class.php";
            }
	}
    }

    class Aplicacao {
	public static function run() {
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
                    $conteudo = $retorno;
                }
            }
            // Conteúdo até aqui
            echo json_encode($conteudo);
	}
    }
    Aplicacao::run();
?>

