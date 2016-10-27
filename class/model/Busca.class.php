<?php
    class Busca {
	private $id;
	private $tabela;
	
	public function __construct($tabela) {
            $conexao = Transacao::get();
            if(isset($_POST["id"])) {
                $this->id = $conexao->quote($_POST["id"]);
            } else {
                $this->id = $conexao->quote($_GET["id"]);
            }
            $this->tabela = $tabela;
	}
	
	public function model() {
            try {
                $conexao = Transacao::get();
                $sql = "SELECT * FROM $this->tabela WHERE id=$this->id";
                $resultado = $conexao->Query($sql);
                if($resultado->rowCount()==0) {
                    $retorno["erro"] = true;
                    $retorno["msg"] = "Nenhum valor encontrado!";
                } else {
                    $retorno["erro"] = false;
                    $retorno["msg"] = $resultado->fetchObject();
                }
            } catch(Exception $e) {
                $retorno["erro"] = true;
                $retorno["msg"] = "Ocorreu um erro entre em contato com o Administrador ".$e->getMessage();
            }
            return $retorno;
	}
    }
?>