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
    
        
        <div>
            <div class="conteudo">
                [@conteudo]
            </div>
        </div><!-- /.container -->

	<!-- Formulário para Status -->
        <div class="modal fade" id="status">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body text-center">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-lg btn-primary btn-block" data-dismiss="modal">Fechar</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
		
        <!-- Formulário para Confirmação -->
        <div class="modal fade" id="confirmaRemocao">
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
        <div class="modal fade container" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Fechar</span>
                        </button>
                        <h4 class="modal-title">Login</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-signin" method="post" action="" id="formLogin">
                            <div class="form-group">
                                <label for="inputUsuario" class="sr-only">Login</label>
                                <input type="usuario" id="inputUsuario" class="form-control" placeholder="Login" name="login">
                            </div>
                            <div class="form-group">
                                <label for="inputSenha" class="sr-only">Senha</label>
                                <input type="password" id="inputSenha" class="form-control" placeholder="Senha" name="senha">
                            </div>
                            <button type="submit" class="btn btn-lg btn-primary btn-block btnFormLogin">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Formulário para Registro -->
        <div class="modal fade container" id="modalInsere" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Fechar</span>
                        </button>
                        <h4 class="modal-title">Registrar</h4>
                    </div>
                    <form method="post" action="" id="formInsere">
                        <div class="modal-body">
                            <div class="form-group">
                                <span class="form-group-addon">Nome Completo</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">E-mail</span>
                                <input type="email" class="form-control obrigatorio" placeholder="email@exemplo.com" name="email">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Usuário</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Login" name="usuario">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Senha</span>
                                <input type="password" class="form-control obrigatorio" placeholder="Senha" name="senha">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Classificação</span>
                                <div class="input-group col-md-12">
                                    <div class="col-md-4">
                                        <input class="col-md-1" type="radio" id="radioEstudante" name="classificacao" value="2">
                                        <span class="col-md-11">Estudante</span>
                                    </div>
                                    <div class="col-md-4">
                                        <input class="col-md-1" type="radio" id="radioProfessor" name="classificacao" value="1">
                                        <span class="col-md-11">Professor</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group dados-professor" id="titulacao">
                                <span class="form-group-addon" title="textoTitulacao">Titulacao</span>
                                <input type="text" class="form-control obrigatorio-prof" placeholder="Titulacao" name="titulacao">
                            </div>
                            <div class="form-group dados-professor" id="areaAtuacao">
                                <span class="form-group-addon" title="textoAtuacao">Área de Atuação</span>
                                <input type="text" class="form-control obrigatorio-prof" placeholder="Área de Atuação" name="areaAtuacao">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Registrar</button>
                            </div>
                        </div>
                        <input type="hidden" name="id">
                    </form>
                </div>
            </div>
        </div>
        
        <!-- Formulário para edição de Usuario-->
        <div class="modal fade" id="modalEditaUsuario" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="">Editar Usuário</h4>
                    </div>
                    <form method="post" action="EditaUsuario" class="formEdita" id="formEditaUsuario">
                        <div class="modal-body">
                            <div class="form-group">
                                <span class="form-group-addon">Usuário</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Login" name="usuario">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">E-mail</span>
                                <input type="email" class="form-control obrigatorio" placeholder="email@exemplo.com" name="email">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Atualizar</button>
                            </div>
                        </div>
                        <input type="hidden" name="id">
                        <input type="hidden" name="idUsuario">
                    </form>
                </div>
            </div>
        </div>

        <!-- Formulário para edição de Estudante-->
        <div class="modal fade" id="modalEditaEstudante" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="">Editar Estudante</h4>
                    </div>
                    <form method="post" action="EditaEstudante" class="formEdita" id="formEditaEstudante">
                        <div class="modal-body">
                            <div class="form-group">
                                <span class="form-group-addon">Nome</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">E-mail</span>
                                <input type="email" class="form-control obrigatorio" placeholder="email@exemplo.com" name="email">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Usuário</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Login" name="usuario">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Atualizar</button>
                            </div>
                        </div>
                        <input type="hidden" name="id">
                        <input type="hidden" name="idUsuario">
                    </form>
                </div>
            </div>
        </div>
        
        <!-- Formulário para edição de Professor-->
        <div class="modal fade" id="modalEditaProfessor" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="">Editar Professor</h4>
                    </div>
                    <form method="post" action="EditaProfessor" class="formEdita" id="formEditaProfessor">
                        <div class="modal-body">
                            <div class="form-group">
                                <span class="form-group-addon">Nome</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">E-mail</span>
                                <input type="email" class="form-control obrigatorio" placeholder="email@exemplo.com" name="email">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Usuário</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Login" name="usuario">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Titulação</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Título" name="titulacao">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Área de Atuação</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Área de Atuação" name="areaAtuacao">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Atualizar</button>
                            </div>
                        </div>
                        <input type="hidden" name="id">
                        <input type="hidden" name="idUsuario">
                    </form>
                </div>
            </div>
        </div>
	     
        <script type="text/javascript" src="bootstrap-3.3.7/dist/js/bootstrap.min.js" ></script>
        <script type="text/javascript" src="js/controleClicks.js"></script>
        <script type="text/javascript" src="js/usuarios.js"></script>
        <script type="text/javascript" src="js/Login/statusLogin.js"></script>
    </body>
</html>