            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Adicionar Máterias
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">

                        <form role="form" action="InsereMateria" id="formAddMateria">
                            <div class="form-group">
                                <label>Nome da Matéria</label>
                                <input class="form-control obrigatorio" placeholder="Insira o nome da Máteria" name="nome">
                            </div>
                            <div class="form-group">
                                <label>Insira uma descrição da Matéria</label>
                                <textarea class="form-control obrigatorio" rows="4" name="descricao"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                            <button type="reset" class="btn btn-warning">Resetar</button>
                        </form>
                    </div>
                </div>
            </div>