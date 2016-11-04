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
                <img src="../view/images/logo.png" alt="" width="40px" height="40px" />
                <a class="navbar-brand" href="index.html">Sala de Aula</a>
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
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Nome do Usuario <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#"><i class="fa fa-fw fa-user"></i> Perfil</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-gear"></i> Excluir Conta</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
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
                                <a href="?insereCurso">Adicionar Cursos</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso">Ver Cursos</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#materia"><i class="fa fa-fw fa-arrow-circle-right"></i> Matéria <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="materia" class="collapse">
                            <li>
                                <a href="?insereCurso">Buscar Matérias</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso"> Adicionar Matéria</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#topico"><i class="fa fa-fw fa-arrow-circle-right"></i> Tópico <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="topico" class="collapse">
                            <li>
                                <a href="?insereCurso">Buscar Tópico</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso"> Adiciona Tópico</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#questao"><i class="fa fa-fw fa-arrow-circle-right"></i> Questão <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="questao" class="collapse">
                            <li>
                                <a href="?insereCurso">Buscar Questão</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso"> Adiciona Questão</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#instituicao"><i class="fa fa-fw fa-arrow-circle-right"></i> Instituição de Ensino<i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="instituicao" class="collapse">
                            <li>
                                <a href="?ranking">Buscar Instituição</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso">Adicionar Instituição</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#curso"><i class="fa fa-fw fa-arrow-circle-right"></i> Ranking <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="ranking" class="collapse">
                            <li>
                                <a href="?ranking">Ranking por Cursos</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso">Ranking por Instituição</a>
                            </li>
                            <li>
                                <a href="?visualizaCurso">Ranking Geral</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-fw fa-envelope"></i> Gerar Testes</a>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-fw fa-user"></i> Estudantes</a>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-fw fa-user"></i> Professor</a>
                    </li>
                    <li>
                        <a href="index.html"><i class="fa fa-fw fa-envelope"></i> Relatório de Questões</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">
            <div>
                <div class="conteudo">
                    [@conteudo]
                </div>
            </div><!-- /.container -->
            
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    
    <!-- jQuery -->
    <script src="../view/Telas/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../view/Telas/js/bootstrap.min.js"></script>
</body>

</html>
