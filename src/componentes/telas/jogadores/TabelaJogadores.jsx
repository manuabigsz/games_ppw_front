import { useContext } from "react";
import JogadoresContext from "./JogadoresContext";
import Alerta from "../../comuns/Alerta";
import { format } from 'date-fns';

function TabelaJogadores() {

    const { alerta, listaObjetos, remover,
        novoObjeto, editarObjeto } = useContext(JogadoresContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Jogadores de Games</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => novoObjeto()}>
                Novo <i className="bi bi-file-plus"></i>
            </button>
            <br />
            <br />
            {listaObjetos.length === 0 && <h1>Nenhuma desenvolvedora encontrada</h1>}
            {listaObjetos.length > 0 &&
                <div className="table-responsive">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                               
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Senha</th>
                                <th scope="col">Data de criação da conta</th>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                   
                                    <th scope="row">{objeto.id}</th>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.email}</td>
                                    <td>{objeto.senha}</td>
                                    <td>{format(new Date(objeto.data_cadastro), 'dd/MM/yyyy')}</td>


                                    <td align="center">
                                        <button className="btn btn-info"
                                            title="Editar"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalEdicao"
                                            onClick={() =>
                                                editarObjeto(objeto.id)}                                            >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger"
                                            title="Remover"
                                            onClick={() => remover(objeto.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            }
        </div>
    )
}

export default TabelaJogadores;