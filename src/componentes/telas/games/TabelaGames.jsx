import { useContext } from "react";
import CategoriaContext from "./GamesContext";
import Alerta from "../../comuns/Alerta";

function TabelaGames() {

    const { alerta, listaObjetos, remover,
        novoObjeto, editarObjeto } = useContext(CategoriaContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1 id="txtCont1">Games</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-secondary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => novoObjeto()}>
                Novo <i className="bi bi-file-plus"></i>
            </button>
            <br />
            <br />
            {listaObjetos.length === 0 && <h1 id="txtCont1">Nenhuma plataforma encontrada</h1>}
            {listaObjetos.length > 0 &&
                <div className="table-responsive">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>

                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Plataforma</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Desenvolvedora</th>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>

                                    <th scope="row">{objeto.id}</th>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.plataforma}</td>
                                    <td>{objeto.categoria}</td>
                                    <td>{objeto.desenvolvimento}</td>
                                    <td align="center">
                                        <button className="btn btn-dark"
                                            title="Editar"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalEdicao"
                                            onClick={() =>
                                                editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>


                                        <button className="btn btn-light ml-2"
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

export default TabelaGames;