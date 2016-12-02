<?php

class RemoveQuestao{
    public function controller() {
        return Remove::removePorId("questao", $_GET["id"]);
    }
}

?>