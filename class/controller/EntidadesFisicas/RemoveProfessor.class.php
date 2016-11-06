<?php

class RemoveProfessor {
    public function controller() {
        return Remove::removePessoaPorId("professor", $_GET["id"], $_GET["idUsuario"]);
    }
}

?>

