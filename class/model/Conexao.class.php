<?php
    final class Conexao {
	private function __construct() {}
	
	public static function open() {
            $usuario = "saladeaula";
            $senha = "saladeaula";
            $bancodedados = "saladeaula";
            $host = "localhost";
            $porta = "3306";

            $conexao = new PDO("mysql:host={$host};port={$porta};dbname={$bancodedados}", $usuario, $senha);

            $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexao->Query("SET NAMES utf8");

            return $conexao;
	}
    }
?>