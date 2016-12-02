            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Adicionar Questão
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">

                        <form role="form" action="InsereQuestao" id="formAddQuestao" method="post">
                            <div class="form-group">
                                <label>Nome</label>
                                <textarea class="form-control obrigatorio" placeholder="Insira o nome da Questão" name="nome"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Questão</label>
                                <textarea class="form-control obrigatorio" placeholder="Insira a Questão" name="questao"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label>Resposta A</label>
                                <textarea class="form-control obrigatorio" placeholder="Insira a Resposta A" name="respostaA"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta B</label>
                                <textarea class="form-control obrigatorio" placeholder="Insira a Resposta B" name="respostaB"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta C</label>
                                <textarea class="form-control obrigatorio" placeholder="Insira a Resposta C" name="respostaC"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Resposta D</label>
                                <textarea class="form-control obrigatorio" placeholder="Insira a Resposta D" name="respostaD"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <span class="form-group-addon">Resposta</span>
                                <div class="input-group col-md-12">
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaA" name="resposta" value="a">
                                        <span class="">A</span>
                                    </div>
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaB" name="resposta" value="b">
                                        <span class="">B</span>
                                    </div>
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaC" name="resposta" value="c">
                                        <span class="">C</span>
                                    </div>
                                    <div class="col-md-3">
                                        <input class="" type="radio" id="radioRespostaD" name="resposta" value="d">
                                        <span class="">D</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                            <button type="reset" class="btn btn-warning">Resetar</button>
                        </form>
                    </div>
                </div>
            </div>