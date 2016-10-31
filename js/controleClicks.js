jQuery(".btnLogin").click(function(e) {
    e.preventDefault();
    jQuery("#modalLogin").trigger("reset");
    jQuery("#modalLogin").find("form").attr("action","LoginUsuario");
    jQuery("#modalLogin").modal("show");
});

jQuery(".btnRegistrar").click(function(e) {
    e.preventDefault();
    jQuery("#modalInsereEdita .modal-title").html("Registrar");
    jQuery("#modalInsereEdita").find("button[type=submit]").html("Registrar");
    jQuery("#modalInsereEdita").find("form").attr("action","InsereUsuario");
    
    jQuery("#modalInsereEdita").trigger("reset");
    jQuery("#modalInsereEdita").modal("show");
});

jQuery(".btnRegistrarEstudante").click(function(e) {
    e.preventDefault();
    jQuery("#modalInsereEditaEstudante .modal-title").html("Registrar");
    jQuery("#modalInsereEditaEstudante").find("button[type=submit]").html("Registrar");
    jQuery("#modalInsereEditaEstudante").find("form").attr("action","InsereEstudante");
    
    jQuery("#modalInsereEditaEstudante").trigger("reset");
    jQuery("#modalInsereEditaEstudante").modal("show");
});

jQuery(".editar").click(function(e) {
    e.preventDefault();
    var linha = jQuery(this).closest("tr");
    
    jQuery("#modalInsereEdita .modal-title").html("Editar");
    jQuery("#modalInsereEdita").find("button[type=submit]").html("Editar");
    jQuery("#modalInsereEdita").find("form").attr("action", "EditaUsuario");
    
    jQuery("#modalInsereEdita").find("input[name=nome]").val(jQuery(linha).children("td:eq(0)").text());
    jQuery("#modalInsereEdita").find("input[name=email]").val(jQuery(linha).children("td:eq(1)").text());
    jQuery("#modalInsereEdita").find("input[name=usuario]").val(jQuery(linha).children("td:eq(2)").text());
    jQuery("#modalInsereEdita").find("input[name=id]").val(jQuery(linha).attr("cod"));
    jQuery("#modalInsereEdita").modal("show");
});

jQuery(".editarEstudante").click(function(e) {
    e.preventDefault();
    var linha = jQuery(this).closest("tr");
    
    jQuery("#modalInsereEditaEstudante .modal-title").html("Editar");
    jQuery("#modalInsereEditaEstudante").find("button[type=submit]").html("Editar");
    jQuery("#modalInsereEditaEstudante").find("form").attr("action", "EditaEstudante");
    
    jQuery("#modalInsereEditaEstudante").find("input[name=nome]").val(jQuery(linha).children("td:eq(0)").text());
    jQuery("#modalInsereEditaEstudante").find("input[name=email]").val(jQuery(linha).children("td:eq(1)").text());
    jQuery("#modalInsereEditaEstudante").find("input[name=usuario]").val(jQuery(linha).children("td:eq(2)").text());
    jQuery("#modalInsereEditaEstudante").find("input[name=id]").val(jQuery(linha).attr("cod"));
    jQuery("#modalInsereEditaEstudante").modal("show");
});

jQuery("#formInsereEdita").submit(function(e) {
    e.preventDefault();
    /*if((jQuery("#formInsereEdita").find("input[name=nome]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=email]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=usuario]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=senha]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }*/
    if((jQuery("#formInsereEdita").find("input[name=nome]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=email]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=usuario]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    
    
    var dados = jQuery("#formInsereEdita").serialize();
    var acao = jQuery("#formInsereEdita").attr("action");
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#status .modal-title").html("Sucesso");
                var valores = jQuery("#formInsereEdita").serializeArray();
                jQuery("#modalInsereEdita").modal("hide");
                jQuery("#formInsereEdita").trigger("reset");
                
                if (acao == "InsereUsuario") {
                    var linha = "<tr cod="+retornoPost.id+"><br>";
                    jQuery.each(valores, function (indice, valor) {
                        if((valor.name != "id") && (valor.name != "senha")) {
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
                if (acao == "EditaUsuario") {
                    var linha = ".table tbody tr[cod="+valores[4].value+"] "; 
                    jQuery(linha+"td:eq(0)").text(valores[0].value);
                    jQuery(linha+"td:eq(1)").text(valores[1].value);
                    jQuery(linha+"td:eq(2)").text(valores[2].value);
                }
            } else {
                jQuery("#status .modal-title").html("Erro");
            }
            jQuery("#status .modal-body").html(retornoPost.msg);
            jQuery("#status").modal("show");
            //alert(retornoPost.msg);
        },
        async: false
    });
    return false;
});

jQuery("#formInsereEditaEstudante").submit(function(e) {
    e.preventDefault();
    /*if((jQuery("#formInsereEdita").find("input[name=nome]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=email]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=usuario]").val() == "")
            || (jQuery("#formInsereEdita").find("input[name=senha]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }*/
    if((jQuery("#formInsereEditaEstudante").find("input[name=nome]").val() == "")
            || (jQuery("#formInsereEditaEstudante").find("input[name=email]").val() == "")
            || (jQuery("#formInsereEditaEstudante").find("input[name=usuario]").val() == "")) {
        alert("Campo obrigatório não preenchido");
        return false;
    }
    
    
    var dados = jQuery("#formInsereEditaEstudante").serialize();
    var acao = jQuery("#formInsereEditaEstudante").attr("action");
    jQuery.ajax({
        url: "class/index.php?acao="+acao,
        data: dados,
        type: 'POST',
        success: function (retornoPost) {
            var retornoPost = JSON.parse(retornoPost);
            if(!retornoPost.erro) {
                jQuery("#status .modal-title").html("Sucesso");
                var valores = jQuery("#formInsereEditaEstudante").serializeArray();
                jQuery("#modalInsereEditaEstudante").modal("hide");
                jQuery("#formInsereEditaEstudante").trigger("reset");
                
                if (acao == "InsereEstudante") {
                    var linha = "<tr cod="+retornoPost.id+"><br>";
                    jQuery.each(valores, function (indice, valor) {
                        if((valor.name != "id") && (valor.name != "senha")) {
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
                if (acao == "EditaEstudante") {
                    var linha = ".table tbody tr[cod="+valores[4].value+"] "; 
                    jQuery(linha+"td:eq(0)").text(valores[0].value);
                    jQuery(linha+"td:eq(1)").text(valores[1].value);
                    jQuery(linha+"td:eq(2)").text(valores[2].value);
                }
            } else {
                jQuery("#status .modal-title").html("Erro");
            }
            jQuery("#status .modal-body").html(retornoPost.msg);
            jQuery("#status").modal("show");
            //alert(retornoPost.msg);
        },
        async: false
    });
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