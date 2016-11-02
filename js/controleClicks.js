jQuery(".btnLogin").click(function(e) {
    e.preventDefault();
    jQuery("#modalLogin").trigger("reset");
    jQuery("#modalLogin").find("form").attr("action","LoginUsuario");
    jQuery("#modalLogin").modal("show");
});

jQuery(".btnRegistrar").click(function(e) {
    e.preventDefault();
    jQuery("#modalInsere").find("form").attr("action","InsereUsuario");
    jQuery("#formInsere").trigger("reset");
    jQuery("#modalInsere").modal("show");
    jQuery("#modalInsere").find('span.form-group-addon[title="textoTitulacao"]').hide();
    jQuery("#modalInsere").find("input[name=titulacao]").hide();
    jQuery("#modalInsere").find('span.form-group-addon[title="textoAtuacao"]').hide();
    jQuery("#modalInsere").find("input[name=areaAtuacao]").hide();
    jQuery("#radioProfessor").click(function (e){
        jQuery("#modalInsere").find('span.form-group-addon[title="textoTitulacao"]').show();
        jQuery("#modalInsere").find("input[name=titulacao]").show();
        jQuery("#modalInsere").find('span.form-group-addon[title="textoAtuacao"]').show();
    jQuery("#modalInsere").find("input[name=areaAtuacao]").show();
    });
    jQuery("#radioEstudante").click(function (e){
        //jQuery("#modalInsere").style.visible
        jQuery("#modalInsere").find('span.form-group-addon[title="textoTitulacao"]').hide();
        jQuery("#modalInsere").find("input[name=titulacao]").hide();
        jQuery("#modalInsere").find('span.form-group-addon[title="textoAtuacao"]').hide();
    jQuery("#modalInsere").find("input[name=areaAtuacao]").hide();
    });
});


jQuery(".editarEstudante").click(function(e) {
    e.preventDefault();
    var linha = jQuery(this).closest("tr");
    
    jQuery("#modalEditaEstudante").find("button[type=submit]").html("Editar");
    jQuery("#modalEditaEstudante").find("form").attr("action", "EditaEstudante");
    
    jQuery("#modalEditaEstudante").find("input[name=nome]").val(jQuery(linha).children("td:eq(0)").text());
    jQuery("#modalEditaEstudante").find("input[name=email]").val(jQuery(linha).children("td:eq(1)").text());
    jQuery("#modalEditaEstudante").find("input[name=usuario]").val(jQuery(linha).children("td:eq(2)").text());
    jQuery("#modalEditaEstudante").find("input[name=id]").val(jQuery(linha).attr("cod"));
    jQuery("#modalEditaEstudante").modal("show");
});

jQuery(".editarProfessor").click(function(e) {
    e.preventDefault();
    var linha = jQuery(this).closest("tr");
    
    jQuery("#modalEditaProfessor").find("button[type=submit]").html("Editar");
    jQuery("#modalEditaProfessor").find("form").attr("action", "EditaProfessor");
    
    jQuery("#modalEditaProfessor").find("input[name=nome]").val(jQuery(linha).children("td:eq(0)").text());
    jQuery("#modalEditaProfessor").find("input[name=email]").val(jQuery(linha).children("td:eq(1)").text());
    jQuery("#modalEditaProfessor").find("input[name=usuario]").val(jQuery(linha).children("td:eq(4)").text());
    jQuery("#modalEditaProfessor").find("input[name=titulacao]").val(jQuery(linha).children("td:eq(2)").text());
    jQuery("#modalEditaProfessor").find("input[name=areaAtuacao]").val(jQuery(linha).children("td:eq(3)").text());
    jQuery("#modalEditaProfessor").find("input[name=id]").val(jQuery(linha).attr("cod"));
    jQuery("#modalEditaProfessor").modal("show");
});


jQuery("#formInsere").submit(function(e) {
    e.preventDefault();
    if((jQuery("#formInsere").find("input[name=nome]").val() == "")
            || (jQuery("#formInsere").find("input[name=email]").val() == "")
            || (jQuery("#formInsere").find("input[name=usuario]").val() == "")
            || (jQuery("#formInsere").find("input[name=senha]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    
    var dados = jQuery("#formInsere").serialize();
    var acao = jQuery("#formInsere").attr("action");
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#status .modal-title").html("Sucesso");
                var valores = jQuery("#formInsere").serializeArray();
                jQuery("#modalInsere").modal("hide");
                jQuery("#formInsere").trigger("reset");
                
                /*
                if (acao == "InsereUsuario") {
                    var linha = "<tr cod="+retornoPost.id+"><br>";
                    jQuery.each(valores, function (indice, valor) {
                        if((valor.name != "id") && (valor.name != "senha") && (valor.name != "nome")) {
                            linha += "  <td>"+valor.value+"</td><br>";
                        }
                    });
                    linha += 
                            "   <td>  "+
                                    "<button type='button' class='btn btn-info editar' data-toggle='modal' data-target='#' cod='"+retornoPost.id+"'>"+
                                            "<span class='glyphicon glyphicon-pencil'></span>"+
                                    "</button><br>"+
                            "   </td><br>"+
                            "<td>"+
                                    "<button type='button' class='btn btn-danger remover' data-toggle='modal' data-target='#confirma' cod='"+retornoPost.id+"'>"+
                                            "<span class='glyphicon glyphicon-trash remover'></span>"+
                                    "</button><br>"+
                            "</td><br>";
                    var tabela = jQuery(".table tbody");
                    tabela.append(linha);
                }
                */
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
                /*
                if (acao == "EditaUsuario") {
                    var linha = ".table tbody tr[cod="+valores[3].value+"] "; 
                    jQuery(linha+"td:eq(0))").text(valores[0].value);
                    jQuery(linha+"td:eq(1)").text(valores[1].value);
                }
                */
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


jQuery(".remover").click(function(e) {
    var linha = jQuery(this).closest("tr");
    var cod = jQuery(linha).attr("cod");
    jQuery("#confirma").modal("show");
    jQuery("#sim").click(function(e) {
        e.preventDefault();
        jQuery("#confirma").modal("hide");
        jQuery.ajax({
            type: 'GET',
            url: "class/index.php?acao=RemoveUsuario&id="+cod,
            success: function (retornoRemove) {
                var retornoRemove = JSON.parse(retornoRemove);
                if(!retornoRemove.erro) {
                    jQuery("#status .modal-title").html("Sucesso");
                    linha.remove();
                } else {
                    jQuery("#status .modal-title").html("Erro");
                }
                jQuery("#status .modal-body").html(retornoRemove.msg);
                jQuery("#status").modal("show");
            },
            async: false
        });
    });
    return false;
});

jQuery(".removerEstudante").click(function(e) {
    var linha = jQuery(this).closest("tr");
    var cod = jQuery(linha).attr("cod");
    jQuery("#confirma").modal("show");
    jQuery("#sim").click(function(e) {
        e.preventDefault();
        jQuery("#confirma").modal("hide");
        jQuery.ajax({
            type: 'GET',
            url: "class/index.php?acao=RemoveEstudante&id="+cod,
            success: function (retornoRemove) {
                var retornoRemove = JSON.parse(retornoRemove);
                if(!retornoRemove.erro) {
                    jQuery("#status .modal-title").html("Sucesso");
                    linha.remove();
                } else {
                    jQuery("#status .modal-title").html("Erro");
                }
                jQuery("#status .modal-body").html(retornoRemove.msg);
                jQuery("#status").modal("show");
            },
            async: false
        });
    });
    return false;
});

jQuery("#formLogin").submit(function(e) {
    e.preventDefault();
    var dados = jQuery("#formLogin").serialize();
    var acao = jQuery("#formLogin").attr("action");
    console.log(dados);
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
            } else {
            }
            //alert(retornoPost.msg);
        },
        async: false
    });
    jQuery("#formLogin").trigger("reset");
    jQuery("#modalLogin").find("form").attr("action", "");
});

jQuery().click(function(e) {
    e.preventDefault();
});