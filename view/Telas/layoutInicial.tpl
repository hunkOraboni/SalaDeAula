<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Sala de Aula</title>

    <!-- Bootstrap Core CSS -->
    <link href="../view/Telas/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../view/Telas/css/sb-admin.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../view/Telas/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body>

    <div id="wrapper">
        
        <!-- Navigation -->
        <nav id="barraNavegacao" class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <img class="navbar-brand navbar-left" src="../view/images/logo.png" width="52px" height="60px"/>
                <a class="navbar-brand" href="?acao=ListaCurso">Sala de Aula</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
                    <ul class="dropdown-menu alert-dropdown">
                        <li>
                            <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">View All</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> [@nomeUsuario] <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="?acao=PerfilUsuario"><i class="fa fa-fw fa-user"></i> Perfil</a>
                        </li>
                        <li>
                            <a href="?acao=RemoverUsuario"><i class="fa fa-fw fa-gear"></i> Excluir Conta</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="?acao=Logout"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li>
                        <a data-toggle="collapse" data-target="#curso"><i class="fa fa-fw fa-arrow-circle-right"></i> Curso <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="curso" class="collapse">
                            <li>
                                <a href="?acao=FormCurso">Adicionar Cursos</a>
                            </li>
                            <li>
                                <a href="?acao=ListaCurso">Ver Cursos</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#materia"><i class="fa fa-fw fa-arrow-circle-right"></i> Matéria <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="materia" class="collapse">
                            <li>
                                <a class="btnBuscaMat">Buscar Matérias</a>
                            </li>
                            <li>
                                <a href="?acao=FormMateria"> Adicionar Matéria</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#topico"><i class="fa fa-fw fa-arrow-circle-right"></i> Tópico <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="topico" class="collapse">
                            <li>
                                <a class="btnBuscaTop">Buscar Tópico</a>
                            </li>
                            <li>
                                <a href="?acao=FormTopico"> Adiciona Tópico</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#questao"><i class="fa fa-fw fa-arrow-circle-right"></i> Questão <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="questao" class="collapse">
                            <li>
                                <a class="btnBuscaQuest">Buscar Questão</a>
                            </li>
                            <li>
                                <a href="?acao=FormQuestao"> Adiciona Questão</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#instituicao"><i class="fa fa-fw fa-arrow-circle-right"></i> Instituição de Ensino<i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="instituicao" class="collapse">
                            <li>
                                <a class="btnBuscaInst">Buscar Instituição</a>
                            </li>
                            <li>
                                <a href="?acao=InsereIstituicao">Adicionar Instituição</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#ranking"><i class="fa fa-fw fa-arrow-circle-right"></i> Ranking <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="ranking" class="collapse">
                            <li>
                                <a href="?acao=ranking">Ranking por Cursos</a>
                            </li>
                            <li>
                                <a href="?acao=visualizaCurso">Ranking por Instituição</a>
                            </li>
                            <li>
                                <a href="?acao=visualizaCurso">Ranking Geral</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-fw fa-envelope"></i> Gerar Testes</a>
                    </li>
                    <li>
                        <a href="?acao=ListaEstudante"><i class="fa fa-fw fa-user"></i> Estudantes</a>
                    </li>
                    <li>
                        <a href="?acao=ListaProfessor"><i class="fa fa-fw fa-user"></i> Professor</a>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-fw fa-envelope"></i> Relatório de Questões</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">
            <div class="container-fluid"> <!-- /.container -->
                <div class="conteudo">
                    [@conteudo]
                </div>
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    
    <!-- Modais -->
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
        
        <!-- Formulario para Criacao de Curso -->
        <div class="modal fade container" id="modalInsereCurso" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Fechar</span>
                        </button>
                        <h4 class="modal-title">Adicionar Curso </h4>
                    </div>
                    <form method="post" action="" id="formInsereCurso">
                        <div class="modal-body">
                            <div class="form-group">
                                <span class="form-group-addon">Nome do Curso</span>
                                <input type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <span class="form-group-addon">Insira uma descricao do Curso</span>
                                <textarea class="form-control obrigatorio" rows="4" name="descricao"></textarea>
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
        
    <!-- Formulário para edição de Curso-->
        <div class="modal fade" id="modalEditaCurso" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="">Informações do Curso</h4>
                    </div>
                    <form method="post" class="formEditaCurso" id="formEditaCurso">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Nome do Curso</label>
                                <input disabled="disabled" type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <label>Descrição do Curso</label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="descricao"></textarea>
                            </div>
                            
                            <div class="modal-footer">
                                <button class="btn btn-primary editarCamposCurso">Editar</button>
                                <button disabled="disabled" type="submit" class="btn btn-primary salvarCamposCurso">Salvar</button>
                                <button class="btn btn-warning removerCamposCurso">Remover</button>
                            </div>
                        </div>
                        <input type="hidden" name="id">
                    </form>
                </div>
            </div>
        </div>

    <!-- Formulário para insercao de Materia-->
        <div class="modal fade" id="modalInsereMateria" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="textoInsere">Inserção de Matéria</h4>
                    </div>
                    <form method="post" class="formInsereMateria" id="formInsereMateria">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Nome da Matéria</label>
                                <input type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <label>Descrição da Matéria</label>
                                <textarea class="form-control obrigatorio" rows="4" name="descricao"></textarea>
                            </div>
                            
                            <div class="modal-footer">
                                <button class="btn btn-warning" type="reset">Resetar</button>
                                <button type="submit" class="btn btn-primary">Salvar</button>
                            </div>
                        </div>
                        <input type="hidden" name="idCurso">
                        <input type="hidden" name="id">
                    </form>
                </div>
            </div>
        </div>
    <!-- Fim modal InsereMateria -->
    
    <!-- Formulário para edição de Curso -->
        <div class="modal fade" id="modalEditaQuestao" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="">Informações da Questão</h4>
                    </div>
                    <form method="post" class="formEditaQuestao" id="formEditaQuestao">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Nome da Questão</label>
                                <input disabled="disabled" type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <label>Enunciado: </label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="enunciado"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta A</label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="respostaA"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta B</label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="respostaB"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta C</label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="respostaC"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta D</label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="respostaD"></textarea>
                            </div>

                            <div class="modal-footer">
                                <button class="btn btn-primary editarCamposQuestao">Editar</button>
                                <button disabled="disabled" type="submit" class="btn btn-primary salvarCamposQuestao">Salvar</button>
                                <button class="btn btn-warning removerCamposCurso">Remover</button>
                            </div>
                        </div>
                        <input type="hidden" name="id">
                    </form>
                </div>
            </div>
        </div>

    
    <!-- Modais -->
    
    <!-- jQuery -->
    <script src="../view/Telas/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script type="text/javascript" src="js/Login/statusLogin.js"></script>
    <script type="text/javascript" src="js/controleClicks.js"></script>
    <script src="../view/Telas/js/bootstrap.min.js"></script>
</body>

</html>
