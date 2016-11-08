// Nivel de acesso:
/*
 * Admin = 0
 * Professor = 1
 * Estudante = 2
 * 
 * Admin = Estudantes, Professor, Relat�rio de Quest�es
 * Professor = Estudantes
 * Estudante = Gerar Teste
 */

jQuery(".btnLogin").click(function(e) {
    // Previne que o browser abra o link
    e.preventDefault(); 

    // Encontra os elementos do html
    var $modalLogin = $("#modalLogin");
    var $formLogin = $modalLogin.find("form");

    // Define a ação do PHP
    $formLogin.attr("action", "LoginUsuario");

    // Limpa o formulário e mostra 
    $formLogin.trigger("reset");
    $modalLogin.modal("show");
});

function status() {
    var retornoStatus = null;
    jQuery.ajax({
        url: "class/index.php?acao=LoginUsuario",
        data: {"status": ""},
        type: 'POST',
        success: function (retornoLogin) {
            var retornoLogin = JSON.parse(retornoLogin);
            retornoStatus = retornoLogin;
        },
        async: false
    });
    return retornoStatus;
}

$("#formLogin").submit(function(e) {
    e.preventDefault();
    var dados = $("#formLogin").serialize();
    var acao = $("#formLogin").attr("action");
    $("#modalLogin").modal("hide");
    $.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                setTimeout(function() { window.location.replace("index.php?acao=ListaCurso")}, 2000);
            } else {
                jQuery("#status .modal-title").html("Erro");
                jQuery("#status .modal-body").html(retornoPost.msg);
                jQuery("#status").modal("show");
            }
            //alert(retornoPost.msg);
        },
        async: false
    });
    $("#formLogin").trigger("reset");
    $("#formLogin").modal("hide");
    $("#modalLogin").find("form").attr("action", "");
});

/*
jQuery(window).load(function() {
    var retornoStatus = status();
    if(retornoStatus.erro) {
        if(retornoStatus.msg === "Tempo esgotado") {
            jQuery("#status .modal-title").text("Erro");
            jQuery("#status .modal-body").text(retornoStatus.msg);
            jQuery("#status").modal("show");
            setTimeout(function () {jQuery("#status").modal("hide")}, 2000);
            jQuery.ajax({
                url: "class/index.php?acao=Logout",
                data: "",
                type: "POST",
                success: function (retornoLogout) {
                    //window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?");
                    var retornoLogout = JSON.parse(retornoLogout);
                    //jQuery("#status .modal-title").html("Logout");
                    //jQuery("#status .modal-body").html(retornoLogout.msg);
                    //jQuery("#status").modal("show");
                    if(!retornoLogout.erro) {
                        jQuery(".btnDocente").attr("href", "?");
                        jQuery(".btnProgressao").attr("href", "?");
                        jQuery(".btnAlteraSenha").attr("href", "?");
                        jQuery("#statusUsuario").children().text("Nenhum usuário logado");
                    }
                },
                async: false
            });
            setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
            /*if((window.location.search === "?acao=Docente") || (window.location.search === "?acao=Progressao")) {
                setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
            }*//*
        } else if(retornoStatus.msg === "Nenhum usuário logado.") {
            jQuery(".btnDocente").attr("href", "?");
            jQuery(".btnProgressao").attr("href", "?");
            jQuery(".btnAlteraSenha").attr("href", "?");
            jQuery("#statusUsuario").children().text("Nenhum usuário logado");
            if(window.location.search !== "") {
                jQuery("#status .modal-title").text("Erro");
                jQuery("#status .modal-body").text(retornoStatus.msg);
                jQuery("#status").modal("show");
                setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
            }
            /*if((window.location.search === "?acao=Docente") || (window.location.search === "?acao=Progressao")) {
                setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
            }*//*
        } else if(retornoStatus.msg === "Usuário não encontrado") {
            jQuery("#statusUsuario").children().text("Nenhum usuário logado.");
            jQuery.ajax({
                url: "class/index.php?acao=Logout",
                data: "",
                type: "POST",
                async: false
            });
            setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
            /*if((window.location.search === "?acao=Docente") || (window.location.search === "?acao=Progressao")) {
                setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
            }*//*
        } else {
            jQuery("#statusUsuario").children().text("Nenhum usuário logado.");
            jQuery.ajax({
                url: "class/index.php?acao=Logout",
                data: "",
                type: "POST",
                async: false
            });
            setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
        }
        //jQuery("#modalLogin").modal("hide");
    } else {
        if(retornoStatus.nivel === 0) {
            jQuery(".btnDocente").attr("href", "?acao=Docente");
        } else {
            jQuery(".btnDocente").attr("href", "?");
        }
        jQuery(".btnProgressao").attr("href", "?acao=Progressao");
        jQuery(".btnAlteraSenha").attr("href", "?acao=AlteraSenha");
        //jQuery(".btnProgressao").attr("href", "?acao=Progressao");
        jQuery("#statusUsuario").children().text("Usuário "+retornoStatus.usuario+" logado");
    }
});
*/

/*jQuery("#formLogin").validate({
    rules: {
        usuario: "required",
        senha: "required"
    },
    messages: {
        usuario: "Digite um usuário",
        senha: "Digite uma senha"
    },
    errorClass: "form-group has-error",
    validClass: "form-group has-success",
    highlight: function (element, errorClass, validClass) {
        jQuery(element).parent().removeClass(validClass).addClass(errorClass);
    },
    unhighlight: function (element, errorClass, validClass) {
        jQuery(element).parent().removeClass(errorClass).addClass(validClass);
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        submitLogin();
        return false;
    }
});



//jQuery("#formLogin").submit(function(e) {
function submitLogin() {
    var retornoStatus = status();
    if(!retornoStatus.erro) {
        jQuery("#modalLogin").modal("hide");
        jQuery("#modalLogin").trigger("reset");
        jQuery("#status .modal-title").text("Erro");
        jQuery("#status .modal-body").text(retornoStatus.msg);
        jQuery("#status").modal("show");
        //setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
        return false;
    }
    //e.preventDefault();
    var dados = jQuery("#formLogin").serialize();
    //console.log(dados);
    jQuery.ajax({
        url: "class/index.php?acao=Login",
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#statusUsuario").children().text("Usuário "+retornoPost.usuario+" logado");
                jQuery("#status .modal-title").text("Sucesso");
                jQuery("#status .modal-body").text(retornoPost.msg);
                jQuery("#status").modal("show");
                jQuery(".btnProgressao").attr("href", "?acao=Progressao");
                jQuery(".btnAlteraSenha").attr("href", "?acao=AlteraSenha");
                if(retornoPost.nivel === "0") {
                    jQuery(".btnDocente").attr("href", "?acao=Docente");
                } else {
                    jQuery(".btnDocente").attr("href", "?");
                }
            } else {
                if(retornoPost.msg === "Não foi possível fazer o login, tente novamente.") {
                    jQuery.ajax({
                        url: "class/index.php?acao=Logout",
                        data: {id: retornoPost.id},
                        type: 'POST'
                    });
                }
                jQuery(".btnProgressao").attr("href", "?");
                jQuery(".btnAlteraSenha").attr("href", "?");
                jQuery(".btnDocente").attr("href", "?");
                jQuery("#status .modal-title").text("Erro");
                jQuery("#status .modal-body").text(retornoPost.msg);
                jQuery("#status").modal("show");
                if((window.location.search === "?acao=Docente") || (window.location.search === "?acao=Progressao")) {
                    setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
                }
            }
            //alert(retornoPost.msg);
        },
        async: false
    });
    jQuery("#formLogin").trigger("reset");
    jQuery("#modalLogin").modal("hide");
    return false;
}
//});*/

jQuery(".btnLogout").click(function(e) {
    e.preventDefault();
    jQuery.ajax({
        url: "class/index.php?acao=Logout",
        data: "",
        type: "POST",
        success: function (retornoLogout) {
            //window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?");
            var retornoLogout = JSON.parse(retornoLogout);
            jQuery("#status .modal-title").html("Logout");
            jQuery("#status .modal-body").html(retornoLogout.msg);
            jQuery("#status").modal("show");
            if(!retornoLogout.erro) {
                jQuery(".btnDocente").attr("href", "?");
                jQuery(".btnProgressao").attr("href", "?");
                jQuery(".btnAlteraSenha").attr("href", "?");
                jQuery("#statusUsuario").children().text("Nenhum usuário logado");
            }
        },
        async: false
    });
    setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
    /*if(window.location.search === "?acao=Docente") {
        setTimeout(function() {window.location.replace("/Estagio_UNIFEI/SistemaInsercao/index.php?")}, 2000);
    }*/
});

jQuery(".btnStatus").click(function(e) {
    e.preventDefault();
});