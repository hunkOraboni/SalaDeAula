<?php
    function __autoload($classe) {
	    $pastas = array('model', 'controller', 'controller/Login', 'controller/EntidadesFisicas', 'controller/Curso', 'controller/Topico', 'controller/Materia', 'controller/Questao');
	    foreach ($pastas as $pasta) {
            if (file_exists("{$pasta}/{$classe}.class.php")) {
                include_once "{$pasta}/{$classe}.class.php";
            }
        }
        require_once "../database.php";
    }

    class Aplicacao {
	    public static function run() {
            // Monta Conteúdo
            $conteudo = "";
            if(isset($_GET["acao"])) {
                $class = $_GET["acao"];
                if(class_exists($class)) {
                    ORM::get_db()->beginTransaction();
                    $pagina = new $class;
                    $retorno = $pagina->controller();
                    if($retorno["erro"]) {
                        ORM::get_db()->rollBack();
                    }
                    else {
                        ORM::get_db()->commit();
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

