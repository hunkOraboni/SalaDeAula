jQuery(".btnLogin").click(function(e) {
    e.preventDefault();
    jQuery("#modalLogin").modal("show");
});

jQuery(".btnRegistrar").click(function(e) {
    e.preventDefault();
    jQuery("#modalRegistrar").modal("show");
});

jQuery(".btnEditar").click(function(e) {
    e.preventDefault();
    var linha = jQuery(this).closest("tr");
    
    jQuery("#modalRegistrar").find("input[name=nome]").val(jQuery(linha).children("td:eq(0)").text());
    jQuery("#modalRegistrar").find("input[name=email]").val(jQuery(linha).children("td:eq(1)").text());
    jQuery("#modalRegistrar").find("input[name=usuario]").val(jQuery(linha).children("td:eq(2)").text());
    jQuery("#modalRegistrar").modal("show");
});