<?php

class RemoveEstudante {
    public function controller() {
        return Remove::removePessoaPorId("estudante", $_GET["id"], $_GET["idUsuario"]);
    }
}

?>
