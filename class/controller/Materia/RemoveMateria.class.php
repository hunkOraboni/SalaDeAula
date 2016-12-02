<?php

class RemoveMateria {
    public function controller() {
        return Remove::removePorId("materia", $_GET["id"]);
    }
}

?>