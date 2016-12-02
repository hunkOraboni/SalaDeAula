            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Questões
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="modal-dialog">
                <div class="modal-content">
                    <form method="post" class="formRespondeQuestao" id="formRespondeQuestao">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>[@nome]</label>
                                <input disabled="disabled" type="text" class="form-control obrigatorio" placeholder="Nome" name="nome">
                            </div>
                            <div class="form-group">
                                <label>[@enunciado] </label>
                                <textarea disabled="disabled" class="form-control obrigatorio" rows="4" name="enunciado"></textarea>
                            </div>
                            <div class="form-group">
                                <div class="input-group col-md-12">
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaA" name="resposta" value="a">
                                        <span class="">[@a]</span>
                                    </div>
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaB" name="resposta" value="b">
                                        <span class="">[@b]</span>
                                    </div>
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaC" name="resposta" value="c">
                                        <span class="">[@c]</span>
                                    </div>
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaD" name="resposta" value="d">
                                        <span class="">[@d]</span>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button class="btn btn-primary editarCamposQuestao">Editar</button>
                                <button disabled="disabled" type="submit" class="btn btn-primary salvarCamposQuestao">Salvar</button>
                                <button class="btn btn-warning removerCamposCurso">Remover</button>
                            </div>
                        </div>
                        <input type="hidden" name="id" value="[@id]">
                    </form>
                </div>
            </div>
        </div>