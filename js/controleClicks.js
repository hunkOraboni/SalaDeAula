function validarCampos($form) {
    var camposPreenchidos = true;

    // Verificar campos obrigatorios da form
    $form.find("input.obrigatorio").each(function () {
        if (!$(this).val()) {
            return camposPreenchidos = false;
        }
    });

    if ($form.attr("id") == "formInsere") {
        // Verificar campos específicos do professor
        var isProfessor = $form.find("#radioProfessor").is(":checked");
        if (isProfessor) {
            $form.find("input.obrigatorio-prof").each(function () {
                if (!$(this).val()) {
                    return camposPreenchidos = false;
                }
            });
        }
    }

    return camposPreenchidos;
}

$("#formAddCurso").submit(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    // Encontra a form no html
    var $formInsere = $("#formAddCurso");

    // Verifica se todos os campos necessários foram preenchidos
    if (!validarCampos($formInsere)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsere.serialize();


    // Define a ação do PHP
    var acao = $formInsere.attr("action");
    $.ajax({
        url: "class/index.php?acao=" + acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    setTimeout(function () {
        window.location.replace("index.php?acao=ListaCurso")
    }, 2000);
    return false;

});

$("#formAddMateria").submit(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    // Encontra a form no html
    var $formInsere = $("#formAddMateria");

    // Verifica se todos os campos necessários foram preenchidos
    if (!validarCampos($formInsere)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsere.serialize();


    // Define a ação do PHP
    var acao = $formInsere.attr("action");
    $.ajax({
        url: "class/index.php?acao=" + acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    setTimeout(function () {
        window.location.replace("index.php?acao=ListaMateria")
    }, 2000);
    return false;

});


$("#formAddTopico").submit(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    // Encontra a form no html
    var $formInsere = $("#formAddTopico");

    // Verifica se todos os campos necessários foram preenchidos
    if (!validarCampos($formInsere)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsere.serialize();


    // Define a ação do PHP
    var acao = $formInsere.attr("action");
    $.ajax({
        url: "class/index.php?acao=" + acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    setTimeout(function () {
        window.location.replace("index.php?acao=ListaTopico")
    }, 2000);
    return false;

});

$("#formAddQuestao").submit(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    // Encontra a form no html
    var $formInsere = $("#formAddQuestao");

    // Verifica se todos os campos necessários foram preenchidos
    if (!validarCampos($formInsere)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsere.serialize();


    // Define a ação do PHP
    var acao = $formInsere.attr("action");
    $.ajax({
        url: "class/index.php?acao=" + acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    setTimeout(function () {
        window.location.replace("index.php?acao=ListaQuestao")
    }, 2000);
    return false;

});

$(".respondeQuestao").click(function(e) {
    //e.preventDefault();
    
    /*var id = $(this).closest("a").attr("cod");
    
    $.ajax({
        url: "class/index.php?acao=RespondeQuestao",
        data: {"id": id},
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            console.log(retornoPost);
        },
        async: false
    });*/
});

$(".editarQuestao").click(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    jQuery(".editarCamposQuestao").prop("disabled", false);
    jQuery(".salvarCamposQuestao").prop("disabled", true);
    jQuery("input[name=nome]").prop("disabled", true);
    jQuery("textarea[name=enunciado]").prop("disabled", true);
    jQuery("textarea[name=respostaA]").prop("disabled", true);
    jQuery("textarea[name=respostaB]").prop("disabled", true);
    jQuery("textarea[name=respostaC]").prop("disabled", true);
    jQuery("textarea[name=respostaD]").prop("disabled", true);
    jQuery("textarea[name=resposta]").prop("disabled", true);
    
    var id = $(this).closest("a").attr("cod");
    // Encontra os elementos html e busca a tabela por php
    var $modalEditaQuestao = $("#modalEditaQuestao");
    $modalEditaQuestao.find("#formEditaQuestao").trigger("reset");
    $.ajax({
        url: "class/index.php?acao=BuscaQuestao",
        data: {"id": id},
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $modalEditaQuestao.find("input[name=id]").attr("value", id);
            $modalEditaQuestao.find("input[name=nome]").attr("value", retornoPost.msg.nome);
            $modalEditaQuestao.find("textarea[name=enunciado]").val(retornoPost.msg.questao);
            $modalEditaQuestao.find("textarea[name=respostaA]").val(retornoPost.msg.a);
            $modalEditaQuestao.find("textarea[name=respostaB]").val(retornoPost.msg.b);
            $modalEditaQuestao.find("textarea[name=respostaC]").val(retornoPost.msg.c);
            $modalEditaQuestao.find("textarea[name=respostaD]").val(retornoPost.msg.d);
            $modalEditaQuestao.find("textarea[name=resposta]").val(retornoPost.msg.resposta);
        },
        async: false
    });
    $modalEditaQuestao.modal("show");
});

$(".editarCamposQuestao").click(function (e) {
    e.preventDefault();
    jQuery(".editarCamposQuestao").prop("disabled", true);
    jQuery(".salvarCamposQuestao").prop("disabled", false);
    var $modalEditaQuestao = $("#modalEditaQuestao");
    $modalEditaQuestao.find("input[name=nome]").prop("disabled", false);
    $modalEditaQuestao.find("textarea[name=enunciado]").prop("disabled", false);
    $modalEditaQuestao.find("textarea[name=respostaA]").prop("disabled", false);
    $modalEditaQuestao.find("textarea[name=respostaB]").prop("disabled", false);
    $modalEditaQuestao.find("textarea[name=respostaC]").prop("disabled", false);
    $modalEditaQuestao.find("textarea[name=respostaD]").prop("disabled", false);
    $modalEditaQuestao.find("textarea[name=resposta]").prop("disabled", false);

});

$(".salvarCamposQuestao").click(function (e) {
    e.preventDefault();
    var dados = $("#formEditaQuestao").serialize();
    $.ajax({
        url: "class/index.php?acao=EditaQuestao",
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    var $modalEditaQuestao = $("#modalEditaQuestao");
    $modalEditaQuestao.modal("hide");
});

$(".removerCamposQuestao").click(function (e) {
    e.preventDefault();
    var dados = $("#formEditaQuestao").serialize();
    $.ajax({
        url: "class/index.php?acao=RemoveQuestao",
        data: dados,
        type: 'GET',
        success: function (retornoGet) {
            var retornoGet = JSON.parse(retornoGet);
            $("#status .modal-title").html(retornoGet.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoGet.msg);
            $("#status").modal("show");
        },
        async: false
    });
    var $modalEditaQuestao = $("#modalEditaQuestao");
    $modalEditaQuestao.modal("hide");
});

$(".insereMateria").click(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    var id = $(this).closest("a").attr("cod");
    // Encontra os elementos html e busca a tabela por php
    var $modalInsereMateria = $("#modalInsereMateria");
    $modalInsereMateria.find("#formInsereMateria").trigger("reset");
    $.ajax({
        url: "class/index.php?acao=BuscaCurso",
        data: {"id": id},
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $modalInsereMateria.find("input[name=idCurso]").attr("value", id);
        },
        async: false
    });
    $modalInsereMateria.modal("show");
});

$("#formInsereMateria").submit(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();

    // Encontra a form no html
    var $formInsereMateria = $("#formInsereMateria");

    // Verifica se todos os campos necessários foram preenchidos
    if (!validarCampos($formInsereMateria)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsereMateria.serialize();

    $.ajax({
        url: "class/index.php?acao=InsereMateria",
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#modalInsereMateria").modal("hide");
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });

    // se a operação foi feita numa página de listagem, atualiza a página
    recarregarLista();

    return false;
});


$(".editarCurso").click(function (e) {
    // Previne que o browser abra o link
    e.preventDefault();
    jQuery(".editarCamposCurso").prop("disabled", false);
    jQuery(".salvarCamposCurso").prop("disabled", true);
    jQuery("input[name=nome]").prop("disabled", true);
    jQuery("textarea[name=descricao]").prop("disabled", true);

    var id = $(this).closest("a").attr("cod");
    // Encontra os elementos html e busca a tabela por php
    var $modalEditaCurso = $("#modalEditaCurso");
    $modalEditaCurso.find("#formEditaCurso").trigger("reset");
    $.ajax({
        url: "class/index.php?acao=BuscaCurso",
        data: {"id": id},
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $modalEditaCurso.find("input[name=id]").attr("value", id);
            $modalEditaCurso.find("input[name=nome]").attr("value", retornoPost.msg.nome);
            $modalEditaCurso.find("textarea[name=descricao]").val(retornoPost.msg.descricao);
        },
        async: false
    });
    $modalEditaCurso.modal("show");
});

$(".editarCamposCurso").click(function (e) {
    e.preventDefault();
    //jQuery(".salvarCamposCurso").attr("disabled", "");
    jQuery(".editarCamposCurso").prop("disabled", true);
    jQuery(".salvarCamposCurso").prop("disabled", false);
    jQuery("input[name=nome]").prop("disabled", false);
    jQuery("textarea[name=descricao]").prop("disabled", false);

});

$(".salvarCamposCurso").click(function (e) {
    e.preventDefault();
    var dados = $("#formEditaCurso").serialize();
    $.ajax({
        url: "class/index.php?acao=EditaCurso",
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    var $modalEditaCurso = $("#modalEditaCurso");
    $modalEditaCurso.modal("hide");
});

$(".removerCamposCurso").click(function (e) {
    e.preventDefault();
    var dados = $("#formEditaCurso").serialize();
    $.ajax({
        url: "class/index.php?acao=RemoveCurso",
        data: dados,
        type: 'GET',
        success: function (retornoGet) {
            var retornoGet = JSON.parse(retornoGet);
            $("#status .modal-title").html(retornoGet.erro ? "Erro" : "Sucesso");
            $("#status .modal-body").html(retornoGet.msg);
            $("#status").modal("show");
        },
        async: false
    });
    var $modalEditaCurso = $("#modalEditaCurso");
    $modalEditaCurso.modal("hide");
});


function recarregarLista() {
    if (location.search.includes("acao=Lista")) {
        setTimeout(location.reload(), 2000);
    }
}