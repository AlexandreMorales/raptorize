var RegistroLivre = RegistroLivre || {};

RegistroLivre.Socios = function Socios(){
	var $template = 
		$('<li class="list-group-item socio-group">' +
			'<div class="list-group-item-heading centralize">' +
				'<h4>Dados do sócio' +
					'<button type="button" class="close" data-dismiss="alert">' +
					    '<span aria-hidden="true">&times;</span>' +
						'<span class="sr-only">Close</span>' +
					 '</button>' +
		         '</h4>' +
			'</div>' +
			'<div class="form-group">' +
				'<label>Nome do sócio</label>' +
				'<input class="form-control nome-socio" name="empresa.socios[].nome" required>' +
			'</div>' +
			'<div class="form-group has-feedback cpf-group">' +
				'<label>CPF</label>' +
				'<input class="form-control cpf" name="empresa.socios[].cpf" placeholder="ex: 000.000.000-00" required>' +
				'<span class="glyphicon form-control-feedback"></span>' +
			'</div>' +
			'<div class="form-group">' +
				'<label>' + 
					'<input type="checkbox" name="empresa.socios[].ativo" checked> Ativo' +
				'</label>' + 
			'</div>' +
		'</li>');
	
	var $templateBuscaAvancada = 
		$('<div class="socios-item-busca-avancada">' +
				'<div class="col-lg-8">' +
					'<div class="form-group">' +
						'<label>Nome do sócio</label>' +
						'<input type="text" class="form-control nome-socio" name="empresa.socios[].nome"/>' +
					'</div>' +
				'</div>' +
				'<div class="col-lg-4">' +
					'<div class="form-group">' +
						'<div onclick="removeSocioBuscaAvancada(this)" class="pull-right cursor-pointer"><span>&times;</span></div>' +
						'<label>CPF</label>' +
						'<input type="text" class="form-control cpf" name="empresa.socios[].cpf" placeholder="ex: 000.000.000-00"/>' +
					'</div>' +
				'</div>' +
			'</div>');
	
	var adicionaSocio = function adicionaSocio(){
		$template.find('.cpf').mask('000.000.000-00');
		$("#divSocios").append($template);
	}
		
	var adicionaSocioComDados = function adicionaSocioComDados(nome, cpf, ativo){
		$template.find("input[name='empresa.socios[].nome']").val(nome);
		$template.find("input[name='empresa.socios[].cpf']").val(cpf);
		$template.find("input[type=checkbox]").attr("checked", ativo);
		adicionaSocio();
	}
	
	var adicionaBuscaAvancada = function adicionaBuscaAvancada(){
		$templateBuscaAvancada.find('.cpf').mask('000.000.000-00');
		$("#socios-lista-busca-avancada").append($templateBuscaAvancada);
		validarBuscaAvancada();
	}
	
	return {
		adicionaSocio: adicionaSocio,
		adicionaSocioComDados: adicionaSocioComDados,
		adicionaBuscaAvancada: adicionaBuscaAvancada
	}
}