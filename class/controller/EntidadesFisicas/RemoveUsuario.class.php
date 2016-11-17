<?php

class RemoveUsuario {
    public function controller() {
        return Remove::removePorId("usuario", $_GET["id"]);
    }
}

?>