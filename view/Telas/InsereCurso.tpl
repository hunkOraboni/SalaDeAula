            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Adicionar Cursos
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">

                        <form role="form" action="InsereCurso" id="formAddCurso">
                            <div class="form-group">
                                <label>Nome do Curso</label>
                                <input class="form-control obrigatorio" placeholder="Insira o nome do Curso" name="nome">
                            </div>
                            <div class="form-group">
                                <label>Insira uma descrição do Curso</label>
                                <textarea class="form-control obrigatorio" rows="4" name="descricao"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                            <button type="reset" class="btn btn-warning">Resetar</button>
                        </form>
                    </div>
                </div>
            </div>