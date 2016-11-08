                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Perfil
                        </h1>
                    </div>
                    <div id="perfil" class="row">
                        <div class="col-lg-6">

                            <form role="form" action="EditaPerfilUsuario" id="formEditaPerfilUsuario">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" class="form-control" name="nome" value="[@nome]">
                                </div>
                                <div class="form-group">
                                    <label>E-mail</label>
                                    <input type="email" class="form-control" name="email" value="[@email]">
                                </div>
                                <!--<div class="form-group">
                                    <label>Instituição de Ensino</label>
                                    <select class="form-control">
                                        <option>UNIFEI</option>
                                        <option>UFRJ</option>
                                        <option>UFMG</option>
                                        <option>UFLA</option>
                                        <option>USP</option>
                                    </select>
                                </div>-->
                                [@PerfilProfessor]
                                <div class="form-group">
                                    <label>Senha Atual</label>
                                    <input type="password" class="form-control" name="senhaAtual">
                                </div>
                                <div class="form-group">
                                    <label>Senha Nova</label>
                                    <input type="password" class="form-control" name="senhaNova">
                                </div>
                                <input type="hidden" name="id" value="[@id]">
                                <button type="submit" class="btn btn-primary"> Editar </button>
                            </form>

                        </div>
                    </div>
                </div>
                <!-- /.row -->