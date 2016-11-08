$(".btnRegistrar").click(function(e) {
    // Previne que o browser abra o link
    e.preventDefault(); 

    // Encontra os elementos do html
    var $modalInsere = $("#modalInsere");
    var $formInsere = $modalInsere.find("form");
    var $radioEstudante = $formInsere.find("#radioEstudante");
    var $radioProfessor = $formInsere.find("#radioProfessor");
    var $dadosProfessor = $formInsere.find(".dados-professor");

    // Define a ação do PHP
    $formInsere.attr("action", "InsereUsuario");

    // Limpa o formulário e mostra 
    $formInsere.trigger("reset");
    $dadosProfessor.hide();
    $radioEstudante.prop("checked", true);
    $modalInsere.modal("show");

    // Ações para os Radio Buttons
    $radioProfessor.click(function (e) {
        $dadosProfessor.slideDown("fast");
    });
    $radioEstudante.click(function (e) {
        $dadosProfessor.slideUp("fast");
    });
});

$("#formEditaPerfilUsuario").submit(function(e) {
    e.preventDefault();
    var $formEditaPerfilUsuario = $("#formEditaPerfilUsuario");
    var valores = $formEditaPerfilUsuario.serializeArray();
    var dados = $formEditaPerfilUsuario.serialize();
    var acao = $formEditaPerfilUsuario.attr("action");
    if(valores[2].value === "") {
        $("#status .modal-title").html("Erro");
        $("#status .modal-body").html("É necessário colocar a senha atual");
        $("#status").modal("show");
        return false;
    }
    $.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro":"Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    setTimeout(function (){ window.location.replace("index.php?acao=ListaCurso")}, 2000);
});

$("#formAddCurso").submit(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();
    // Encontra a form no html
    var $formInsere = $("#formAddCurso");

    // Verifica se todos os campos necessários foram preenchidos
    if(!validarCampos($formInsere)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsere.serialize();
  
    
    // Define a ação do PHP
    var acao = $formInsere.attr("action");
    $.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#status .modal-title").html(retornoPost.erro ? "Erro":"Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });
    setTimeout(function (){ window.location.replace("index.php?acao=ListaCurso")}, 2000);
    return false;

});

$(".editarPessoa").click(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();

    // Encontra os elementos html e busca a tabela por php
    var acao = $(this).attr("acao");
    var $linha = $(this).closest("tr");

    var $modal;
    if(acao == "EditaUsuario") {
        $modal = $("#modalEditaUsuario");
    } else if (acao == "EditaEstudante") {
        $modal = $("#modalEditaEstudante");
    } else {
        $modal = $("#modalEditaProfessor");
    }

    $modal.find("input").each(function() {
        // Descobre o nome do input
        var name = $(this).attr("name");
        if(name != "id" && name != "idUsuario") {
            // Preenche o input com a célula que tem o mesmo nome do input
            $(this).val($linha.children("td[name="+ name +"]").text());
        } else {
            // Se for um id, preenche o input com os dados escondidos da linha
            if(name == "id") {
                $(this).val($linha.attr("cod"));
            } else {
                $(this).val($linha.attr("codUsuario"));
            }
        }
    });

    // Mostra o modal
    $modal.modal("show");
});

$(".editarCurso").click(function(e) {
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

$(".editarCamposCurso").click(function (e){
    e.preventDefault();
    //jQuery(".salvarCamposCurso").attr("disabled", "");
    jQuery(".editarCamposCurso").prop("disabled", true);
    jQuery(".salvarCamposCurso").prop("disabled", false);
    jQuery("input[name=nome]").prop("disabled", false);
    jQuery("textarea[name=descricao]").prop("disabled", false);
    
});

$(".salvarCamposCurso").click(function (e){
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

$(".removerCamposCurso").click(function (e){
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
    if(location.search.includes("acao=Lista")) {
        setTimeout(location.reload(), 2000);
    }
}

function validarCampos($form) {
    var camposPreenchidos = true;

    // Verificar campos obrigatorios da form
    $form.find("input.obrigatorio").each(function() {
        if(!$(this).val()) {
            return camposPreenchidos = false;
        }
    });

    if($form.attr("id") == "formInsere") {
        // Verificar campos específicos do professor
        var isProfessor = $form.find("#radioProfessor").is(":checked");
        if(isProfessor) {
            $form.find("input.obrigatorio-prof").each(function() {
                if(!$(this).val()) {
                    return camposPreenchidos = false;
                }
            });
        }
    }

    return camposPreenchidos; 
}

$("#formInsere").submit(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();

    // Encontra a form no html
    var $formInsere = $("#formInsere");

    // Verifica se todos os campos necessários foram preenchidos
    if(!validarCampos($formInsere)) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Monta o json com os dados da form
    var dados = $formInsere.serialize();
  

    // Define a ação do PHP
    var acao = $formInsere.attr("action");

    $.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            // Recebe a resposta e mostra se ocorreu erro ou não
            var retornoPost = JSON.parse(retornoPost);
            $("#modalInsere").modal("hide");
            $("#status .modal-title").html(retornoPost.erro ? "Erro":"Sucesso");
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });

    // se a operação foi feita numa página de listagem, atualiza a página
    recarregarLista();

    return false;
});

$(".formEdita").submit(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();

    // Verifica se todos os campos necessários foram preenchidos
    if(!validarCampos($(this))) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    
    var dados = $(this).serialize();
    var acao = $(this).attr("action");
    var $modal = $(this).parents(".modal");

    $.ajax({
        url: "class/index.php?acao=" + acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            console.log(dados);
            var retornoPost = JSON.parse(retornoPost);
            console.log(retornoPost);
            if(!retornoPost.erro) {
                $("#status .modal-title").html("Sucesso");
                var valores = $(this).serializeArray();
                $modal.modal("hide");
                $(this).trigger("reset");
            } else {
                $("#status .modal-title").html("Erro");
            }
            $("#status .modal-body").html(retornoPost.msg);
            $("#status").modal("show");
        },
        async: false
    });

    // se a operação foi feita numa página de listagem, atualiza a página
    recarregarLista();

    return false;
});

$(".removerPessoa").click(function(e) {
    // Encontra a linha e o modal de confirmação
    var acao = $(this).attr("acao");
    var $linha = $(this).closest("tr");
    var $modalRemocao = $("#confirmaRemocao");
    
    // Descobre a id da pessoa a ser removida
    var cod = $linha.attr("cod");
    var codUsuario = -1;
    if(acao != "RemoveUsuario") {
        codUsuario = $linha.attr("codUsuario");
    }
    console.log(acao);
    $modalRemocao.modal("show");
    $("#sim").click(function(e) {
        e.preventDefault();
        $modalRemocao.modal("hide");
        $.ajax({
            type: 'GET',
            url: "class/index.php?acao=" + acao + "&id=" + cod + "&idUsuario=" + codUsuario,
            success: function (retornoRemove) {
                console.log(retornoRemove);
                var retornoRemove = JSON.parse(retornoRemove);
                if(!retornoRemove.erro) {
                    $("#status .modal-title").html("Sucesso");
                    $linha.remove();
                } else {
                    $("#status .modal-title").html("Erro");
                }
                $("#status .modal-body").html(retornoRemove.msg);
                $("#status").modal("show");
            },
            async: false
        });
    });
    return false;
});

