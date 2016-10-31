<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <link rel="stylesheet" type="text/css" href="bootstrap-3.3.7/dist/css/bootstrap.min.css" media="all">
        <link rel="stylesheet" type="text/css" href="css/redimensiona.css" media="all">
        <script type="text/javascript" src="js/jquery-3.1.1.min.js" ></script>
    </head>
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="?">Sala de Aula</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="?acao=ListaUsuario">Mostra Usuários</a></li>
                    </ul>
                    <div class="nav navbar-nav navbar-right">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Usuário <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a class="btnLogin" href="?" data-toggle="" data-target="" >Login</a></li>
                                    <li><a class="btnRegistrar" href="?">Registrar</a></li>
                                    <!--<li><a class="btnAlteraSenha" href="?">Alterar Senha</a></li>-->
                                    <li><a class="btnLogout" href="?">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="nav navbar-nav navbar-right">
                        <ul class="nav navbar-nav">
                            <li><a href="">[@status]</a></li>
                        </ul>
                    </div>
                </div><!--/.nav-collapse -->
            </div>
        </div>
    
        
        <div class="container">
            <div class="conteudo">
                [@conteudo]
            </div>
        </div><!-- /.container -->

	<!-- Formulário para Status -->
        <div class="modal fade" id="status">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
		
        <!-- Formulário para Confirmação -->
        <div class="modal fade" id="confirma">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Confirma</h4>
                    </div>
                    <div class="modal-body">
                        <p> Deseja apagar o registro selecionado? </p>
                    </div>
                    <div class="modal-footer">
                        <a type="button" class="btn btn-danger" id="sim">Sim</a>
                        <a type="button" class="btn btn-primary" data-dismiss="modal">N&atilde;o</a>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        
        <!-- Formulário para Login -->
        <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="">Login</h4>
                    </div>
                    <form method="post" action="" id="formLogin">
                        <div class="modal-body">
                            <div class="input-group">
                                <span class="input-group-addon">Usuário</span>
                                <input type="text" class="form-control" placeholder="Usuário" name="usuario">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon">Senha</span>
                                <input type="password" class="form-control" placeholder="Digite sua senha" name="senha">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!--<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>-->
                            <button type="submit" class="btn btn-primary btnFormLogin">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <!-- Formulário para Registro -->
        <div class="modal fade" id="modalInsereEdita" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id=""></h4>
                    </div>
                    <form method="post" action="" id="formInsereEdita">
                        <div class="modal-body">
                            <div class="input-group">
                                <span class="input-group-addon">Nome</span>
                                <input type="text" class="form-control" placeholder="João" name="nome">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon">E-mail</span>
                                <input type="email" class="form-control" placeholder="joao@umprovedor.com" name="email">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon">Usuário</span>
                                <input type="text" class="form-control" placeholder="JoãoUser" name="usuario">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon">Senha</span>
                                <input type="password" class="form-control" placeholder="Senha do João" name="senha">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!--<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>-->
                            <button type="submit" class="btn btn-primary">Registrar</button>
                        </div>
                        <input type="hidden" name="id">
                    </form>
                </div>
            </div>
        </div>
	     
        <script type="text/javascript" src="bootstrap-3.3.7/dist/js/bootstrap.min.js" ></script>
        <script type="text/javascript" src="js/controleClicks.js"></script>
    </body>
</html>