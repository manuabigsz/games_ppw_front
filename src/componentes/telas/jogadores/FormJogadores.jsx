import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import JogadoresContext from "./JogadoresContext";

function FormJogadores() {

    const { objeto, handleChange, acaoCadastrar, alerta }
        = useContext(JogadoresContext);

    return (
        <div className="modal fade" id="modalEdicao"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Categoria</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="mb-3">
                                <label for="txtCodigo" 
                                className="form-label">ID</label>
                                <input type="number" className="form-control" 
                                id="txtCodigo"
                                readOnly name="codigo" value={objeto.id}
                                onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="txtNome" 
                                className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                id="txtNome" placeholder="Informe o nome"
                                required name="nome" value={objeto.nome}
                                onChange={handleChange}/>
                            </div>      
                            <div className="mb-3">
                                <label for="txtEmail" 
                                className="form-label">Email</label>
                                <input type="text" className="form-control" 
                                id="txtEmail" placeholder="Informe o email"
                                required name="email" value={objeto.email}
                                onChange={handleChange}/>
                            </div>      
                            <div className="mb-3">
                                <label for="txtSenha" 
                                className="form-label">Senha</label>
                                <input type="text" className="form-control" 
                                id="txtSenha" placeholder="Informe o senha"
                                required name="senha" value={objeto.senha}
                                onChange={handleChange}/>
                            </div>                         
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-primary">
                                Salvar <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormJogadores;