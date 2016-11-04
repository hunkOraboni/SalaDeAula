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

// Edição desativada por enquanto. É necessário o sistema de logins para prosseguir.
/*
$(".editarEstudante").click(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();

    // Encontra os elementos html e busca a tabela por php
    var $linha = $this.closest("tr");
    var $modalEditaEstudante = $("#modalEditaEstudante");

    // Define a ação do PHP
    $modalEditaEstudante.find("form").attr("action", "EditaEstudante");

    // Encontra e preenche os campos com os dados atuais
    var $nome = $modalEditaEstudante.find("input[name=nome]");
    var $email = $modalEditaEstudante.find("input[name=email]");
    var $usuario = $modalEditaEstudante.find("input[name=usuario]");
    var $id = $modalEditaEstudante.find("input[name=id]");
    $nome.val($linha.children("td:eq(0)").text());
    $email.val($linha.children("td:eq(1)").text());
    $usuario.val($linha.children("td:eq(2)").text());
    $id.val($linha.attr("cod"));
    
    // Mostra o modal
    $modalEditaEstudante.modal("show");
});

$(".editarProfessor").click(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();

    // Encontra os elementos html e busca a tabela por php
    var $linha = $this.closest("tr");
    var $modalEditaProfessor = $("#modalEditaProfessor");
    
    // Define a ação do PHP
    $modalEditaProfessor.find("form").attr("action", "EditaProfessor");
    
    // Encontra e preenche os campos com os dados atuais
    var $nome = $modalEditaProfessor.find("input[name=nome]");
    var $email = $modalEditaProfessor.find("input[name=email]");
    var $titulacao = $modalEditaProfessor.find("input[name=titulacao]");
    var $areaAtuacao = $modalEditaProfessor.find("input[name=areaAtuacao]");
    var $usuario = $modalEditaProfessor.find("input[name=usuario]");
    var $id = $modalEditaProfessor.find("input[name=id]");
    $nome.val($linha.children("td:eq(0)").text());
    $email.val($linha.children("td:eq(1)").text());
    $titulacao.val($linha.children("td:eq(2)").text());
    $areaAtuacao.val($linha.children("td:eq(3)").text());
    $usuario.val($linha.children("td:eq(4)").text());
    $id.val($linha.attr("cod"));

    // Mostra o modal
    $modalEditaProfessor.modal("show");
});
*/

function validarCampos() {
    var camposPreenchidos = true;

    // Encontra form do html
    var $formInsere = $("#formInsere");

    // Verificar campos que pertencem a ambos
    $formInsere.find("input.obrigatorio").each(function() {
        if(!$(this).val()) {
            return camposPreenchidos = false;
        }
    });

    // Verificar campos específicos do professor
    var isProfessor = $formInsere.find("#radioProfessor").is(":checked");
    if(isProfessor) {
        $formInsere.find("input.obrigatorio-prof").each(function() {
            if(!$(this).val()) {
                return camposPreenchidos = false;
            }
        });
    }

    return camposPreenchidos; 
}

$("#formInsere").submit(function(e) {
    // Previne que o browser abra o link
    e.preventDefault();
    
    // Verifica se todos os campos necessários foram preenchidos
    if(!validarCampos()) {
        alert("Campo obrigatório não preenchido");
        return false;
    }

    // Encontra form do html e monta o json com seus dados
    var $formInsere = $("#formInsere");
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
    if(location.search.includes("acao=Lista")) {
        setTimeout(location.reload(), 2000);
    }

    return false;
});

// Edição desativada por enquanto. É necessário o sistema de logins para prosseguir.
/*
jQuery("#formEdita").submit(function(e) {
    e.preventDefault();
    if((jQuery("#formEdita").find("input[name=nome]").val() == "")
            || (jQuery("#formEdita").find("input[name=email]").val() == "")
            || (jQuery("#formEdita").find("input[name=usuario]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    
    var dados = jQuery("#formEdita").serialize();
    var acao = jQuery("#formEdita").attr("action");
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#status .modal-title").html("Sucesso");
                var valores = jQuery("#formEdita").serializeArray();
                jQuery("#modalEdita").modal("hide");
                jQuery("#formEdita").trigger("reset");
                */
                /*
                if (acao == "EditaUsuario") {
                    var linha = ".table tbody tr[cod="+valores[3].value+"] "; 
                    jQuery(linha+"td:eq(0))").text(valores[0].value);
                    jQuery(linha+"td:eq(1)").text(valores[1].value);
                }
                */
                /*
            } else {
                jQuery("#status .modal-title").html("Erro");
            }
            jQuery("#status .modal-body").html(retornoPost.msg);
            jQuery("#status").modal("show");
            //alert(retornoPost.msg);
        },
        async: false
    });
    if((location.search == "?acao=ListaUsuario") || (location.search == "?acao=ListaEstudante")) {
        setTimeout(location.reload(), 2000);
    }
    return false;
});

jQuery("#formEditaEstudante").submit(function(e) {
    e.preventDefault();
    if((jQuery("#formEditaEstudante").find("input[name=nome]").val() == "")
            || (jQuery("#formEditaEstudante").find("input[name=email]").val() == "")
            || (jQuery("#formEditaEstudante").find("input[name=usuario]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    var dados = jQuery("#formEditaEstudante").serialize();
    var acao = jQuery("#formEditaEstudante").attr("action");
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#status .modal-title").html("Sucesso");
                var valores = jQuery("#formEditaEstudante").serializeArray();
                jQuery("#modalEditaEstudante").modal("hide");
                jQuery("#formEditaEstudante").trigger("reset");
            } else {
                jQuery("#status .modal-title").html("Erro");
                jQuery("#formEditaEstudante").modal("hide");
            }
            jQuery("#status .modal-body").html(retornoPost.msg);
            jQuery("#status").modal("show");
            //alert(retornoPost.msg);
        },
        async: false
    });
    if((location.search == "?acao=ListaUsuario") || (location.search == "?acao=ListaEstudante")) {
        setTimeout(location.reload(), 2000);
    }
    return false;
});

jQuery("#formEditaProfessor").submit(function(e) {
    e.preventDefault();
    if((jQuery("#formEditaProfessor").find("input[name=nome]").val() == "")
            || (jQuery("#formEditaProfessor").find("input[name=email]").val() == "")
            || (jQuery("#formEditaProfessor").find("input[name=usuario]").val() == "")
            || (jQuery("#formEditaProfessor").find("input[name=titulacao]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    var dados = jQuery("#formEditaProfessor").serialize();
    var acao = jQuery("#formEditaProfessor").attr("action");
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#status .modal-title").html("Sucesso");
                var valores = jQuery("#formEditaEstudante").serializeArray();
                jQuery("#modalEditaProfessor").modal("hide");
                jQuery("#formEditaProfessor").trigger("reset");
            } else {
                jQuery("#status .modal-title").html("Erro");
                jQuery("#formEditaProfessor").modal("hide");
            }
            jQuery("#status .modal-body").html(retornoPost.msg);
            jQuery("#status").modal("show");
            //alert(retornoPost.msg);
        },
        async: false
    });
    if((location.search == "?acao=ListaUsuario") || (location.search == "?acao=ListaProfessor")) {
        setTimeout(location.reload(), 2000);
    }
    return false;
});
*/

$(".remover").click(function(e) {
    // Encontra a linha e o modal de confirmação
    var $linha = $(this).closest("tr");
    var $modalRemocao = $("#confirmaRemocao");
    
    // Descobre a id do usuário a ser removido
    var cod = $linha.attr("cod");
    
    $modalRemocao.modal("show");
    $("#sim").click(function(e) {
        e.preventDefault();
        $modalRemocao.modal("hide");
        $.ajax({
            type: 'GET',
            url: "class/index.php?acao=RemoveUsuario&id=" + cod,
            success: function (retornoRemove) {
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

$(".removerEstudante").click(function(e) {
    var $linha = $(this).closest("tr");
    var cod = $linha.attr("cod");
    $("#confirma").modal("show");
    $("#sim").click(function(e) {
        e.preventDefault();
        $("#confirma").modal("hide");
        $.ajax({
            type: 'GET',
            url: "class/index.php?acao=RemoveEstudante&id="+cod,
            success: function (retornoRemove) {
                var retornoRemove = JSON.parse(retornoRemove);
                if(!retornoRemove.erro) {
                    $("#status .modal-title").html("Sucesso");
                    linha.remove();
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

$.click(function(e) {
    e.preventDefault();
});