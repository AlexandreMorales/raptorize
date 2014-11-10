$(document).ready(function() {
	// validacao por plugin
	$('#cnpj').mask('00.000.000/0000-00', {
		onKeyPress : function() {
			validaCNPJTempoReal($('#cnpj').val());
		}
	});

	$('#nomeFantasia').keypress(function() {
		if ($('#nomeFantasia').val().length > 0) {
			$("#nomeFantasia-group").addClass("has-success has-feedback");
			$("#nomeFantasia-group").removeClass("has-error");

			$("#nomeFantasia-group span").addClass("glyphicon-ok");
			$("#nomeFantasia-group span").removeClass("glyphicon-remove");

		} else {
			$("#nomeFantasia-group").removeClass("has-success");
			$("#nomeFantasia-group").addClass("has-error");

			$("#nomeFantasia-group span").removeClass("glyphicon-ok");
			$("#nomeFantasia-group span").addClass("glyphicon-remove");
		}
	});

	$('#cnpj').focusout(function() {
		if ($('#cnpj').val() == '') {
			$("#cnpj-group").removeClass("has-success");
			$("#cnpj-group").addClass("has-error");

			$("#cnpj-group span").removeClass("glyphicon-ok");
			$("#cnpj-group span").addClass("glyphicon-remove");

		}
	});	

	$('#nomeFantasia').focusout(function() {
		if ($('#nomeFantasia').val() == '') {
			$("#nomeFantasia-group").removeClass("has-success");
			$("#nomeFantasia-group").addClass("has-error");

			$("#nomeFantasia-group span").removeClass("glyphicon-ok");
			$("#nomeFantasia-group span").addClass("glyphicon-remove");
		}
	});	
});