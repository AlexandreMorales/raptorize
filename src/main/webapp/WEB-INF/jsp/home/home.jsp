<%@ page language="java" contentType="text/html; charset=iso-8859-1" pageEncoding="iso-8859-1"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="pt-br">
<head>	
	<jsp:include page="/WEB-INF/jsp/includes/assets.jsp" />
	<title>Registro Livre - A verdade est� l� fora!</title>	
	<meta charset="iso-8859-1" />
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
	<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
	
	<% //Manter charset utf-8 para funcionar a acentua��o no auto completar %>
	<script src="/assets/js/home.js" charset="utf-8"></script>
	<script src="/assets/js/autocompletar.js" charset="utf-8"></script>
	<script src="/assets/js/socios.js" charset="utf-8"></script>
	<script src="/assets/js/cidades-estados-1.2-utf8.js"></script>
	<script src="/assets/js/validacao-logica-cadastro.js"></script>		
	<script src="/assets/js/validacao-visual-cadastro.js"></script>
	<script src="/assets/js/cidadeEstado.js"></script>
	
	<style>
	
		body{
			background-image:url(../assets/img/fundo-home.png);
			-webkit-background-size: cover;
  			-moz-background-size: cover;
  			-o-background-size: cover;
  			background-size: cover;		
  			background-repeat:no-repeat;
  			background-attachment: fixed;
		}		
		
		.home{
			background-color:transparent;
			border:0;
		}
		
		.descricao{
			color:#fff;
			text-shadow: 1px 1px 4px #000, 2px 2px 4px #000 ;
			line-height:30px;
		}
		
		.panel-default > .panel-heading {
			background-color:transparent;
			border:0;
		}
		
		#registrolivre{
			color:#fff;
			font-size:60px;
			font-family:"Montserrat-Hairline";
			text-shadow: 1px 1px 4px #000, 2px 2px 4px #000 ;					
		}		
	
	</style>
	
</head>

<body>
	<jsp:include page="/WEB-INF/jsp/includes/cabecalho.jsp" />
		
	<div class="container content">		
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3">
				<c:if test="${listaDeResultadosDeEmpresasVazia == true}">
					<div class="alert alert-warning alert-dismissible" role="alert">
						<button type="button" class="close" id="close" data-dismiss="alert">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
						<span id="error">N�o h� nenhum registro de empresa para a busca	efetuada.</span>
					</div>
				</c:if>
				

				<c:if test="${buscaVazia == true}">
					<div class="alert alert-warning alert-dismissible" role="alert">
						<button type="button" class="close" id="close" data-dismiss="alert">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
						<strong>N�o h� nada digitado no campo de busca, por favor tente novamente.</strong>
					</div>
				</c:if>
				
				<div class="panel panel-default margin-100-0-0-0 home">

					<div class="panel-heading centralize home">
						<h1 id="registrolivre">Registro Livre</h1>
						<h4 class="descricao">Um site colaborativo para cadastrar e pesquisar registros p�blicos de empresas brasileiras.</h4>
					</div>
					<div class="panel-body">
						
						<form class="form" id="form-busca" name="pesquisa" action="/busca" method="GET">
							<div class="input-group">
								<input type="text" class="form-control" name="busca" id="campoPesquisado" placeholder="Busque por uma empresa aqui"> <span
									class="input-group-btn">
									<button id="btn-submit" class="btn btn-default botao-busca" type="submit" disabled=""><span class="glyphicon glyphicon-search"></span></button>
								</span>
							</div>
							
							<div class="pull-left padding-30-0-0-0">
								<i class="padding-0-6"><a href="#busca-avancada" id="abrir-busca-avancada">Busca Avan�ada</a></i>
							</div>
						</form>

					</div>
				</div>
			</div>
			
			
			
			<div id="busca-avancada" class="col-lg-6 col-lg-offset-3" style="display:none">
				<div class="panel panel-default margin-30-0">
					<div class="panel-heading centralize">
						<h4>Busca Avan�ada <span id="fecha-busca-avancada" class="pull-right cursor-pointer">&times;</span></h4>
					</div>
					<form class="form" id="pesquisa-avancada" name="pesquisaAvancada" action="buscaAvancada" method="POST" accept-charset="UTF-8,ISO-8859-1" >									
						<div class="panel-body">
							<div class="form-group">
								<label>CNPJ</label>
								<input type="text" id="cnpj-busca-avancada" class="form-control cnpj" name="empresa.cnpj" placeholder="ex: 00.000.000/0000-00"/>
							</div>
							<div class="form-group">
								<label>Nome Fantasia</label>
								<input type="text" id="nome-fantasia-busca-avancada" class="form-control" name="empresa.nomeFantasia"/>
							</div>
							<div class="form-group">
								<label>Raz�o Social</label>
								<input type="text" id="razao-social-busca-avancada" class="form-control" name="empresa.razaoSocial"/>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">										
										<label>Estado</label>
										<div class="select" style="width:230px;">
											<input type="text" id="estado" class="form-control" name="empresa.endereco.uf" style="width: 250px;"/>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Cidade</label>
										<div class="select select-cidade" style="width:280px;">
											<input type="text" id="cidade" class="form-control" name="empresa.endereco.cidade" style="width:300px;"/>
										</div>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label>Logradouro</label>
								<input type="text" id="logradouro" class="form-control" name="empresa.endereco.logradouro"/>
							</div>
							<div id="divSocios"class="row">
															
							</div>
							<div class="form-group centralize">
								<button type="button" class="btn btn-default margin-0-6" id="adiciona-socios-busca-avancada"><span class="glyphicon glyphicon-plus-sign"></span> Pesquisar S�cio</button>
								<br>
							</div>	
						</div>
						<div class="panel-footer">
							<input type="submit" id="botao-pesquisa-avancada" value="Buscar" class="btn btn-lg btn-primary pull-right margin-0-6" disabled="true"/>
							<input type="reset" value="Limpar" class="btn btn-default btn-lg pull-right margin-0-6"/>
							<div style="clear:both"></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<jsp:include page="/WEB-INF/jsp/includes/rodape.jsp" />	
		
</body>
</html>