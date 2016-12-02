<?php

class RemoveTopico {
    public function controller() {
        return Remove::removePorId("topico", $_GET["id"]);
    }
}

?>