<?php

class RemoveCurso {
    public function controller() {
        return Remove::removePorId("curso", $_GET["id"]);
    }
}

?>