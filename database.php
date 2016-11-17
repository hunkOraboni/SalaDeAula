<?php
    require_once "vendors/third_party/libs/idiorm.php";

    $usuario = "saladeaula";
    $senha = "saladeaula";
    $bancodedados = "saladeaula";
    $host = "localhost";
    $porta = "3306";

    ORM::configure("mysql:host={$host};port={$porta};dbname={$bancodedados}");
    ORM::configure("username", $usuario);
    ORM::configure("password", $senha);
    ORM::configure('driver_options', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    ORM::configure('return_result_sets', true);
?>