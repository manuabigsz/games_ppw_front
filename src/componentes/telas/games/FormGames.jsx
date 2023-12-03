import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import GamesContext from "./GamesContext";
import SelectInput from "../../comuns/SelectInput";

function FormPlataforma() {

    const { objeto, handleChange, acaoCadastrar, alerta,listaPlataformas, listaCategorias, listaDesenv }
        = useContext(GamesContext);

        const plataformaOptions = [
            { value: '', label: 'Selecione a plataforma' },
            ...listaPlataformas.map((plat) => ({ value: plat.id, label: plat.nome })),
        ];

        const categoriaOptions = [
            { value: '', label: 'Selecione a categoria' },
            ...listaCategorias.map((cat) => ({ value: cat.id, label: cat.nome })),
        ];

        const desenvOptions = [
            { value: '', label: 'Selecione o desenvolvimento' },
            ...listaDesenv.map((desenv) => ({ value: desenv.id, label: desenv.nome })),
        ];
    return (
        <div className="modal fade" id="modalEdicao"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Games</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="mb-3">
                                <label for="txtId"
                                    className="form-label">ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtId"
                                    readOnly
                                    name="id"
                                    value={objeto.id ?? ''}
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="mb-3">
                                <label for="txtNome"
                                    className="form-label">Nome</label>
                                <input type="text" className="form-control"
                                    id="txtNome" placeholder="Informe o nome"
                                    required name="nome" value={objeto.nome}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDescricao" className="form-label">Descricao</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtDescricao"
                                    placeholder="Informe a descrição"

                                    name="descricao"
                                    value={objeto.descricao}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                 <SelectInput label="Plataforma" 
                                 id="txtPlataformaId" required name="plataforma_id" value={objeto.plataforma_id} onChange={handleChange} 
                                 options={plataformaOptions} validFeedback="Plataforma OK" 
                                 invalidFeedback="Selecione a plataforma"/>
                            </div>
                            <div className="mb-3">
                            <SelectInput label="Categoria" 
                                 id="txtCategoria_id" required name="categoria_id" value={objeto.categoria_id} onChange={handleChange} 
                                 options={categoriaOptions} validFeedback="Categoria OK" 
                                 invalidFeedback="Selecione a categoria"/>
                            </div>
                            <div className="mb-3">
                            <SelectInput label="Desenvolvimento" 
                                 id="txtDesenvolvimento_id" required name="desenvolvimento_id" value={objeto.desenvolvimento_id} onChange={handleChange} 
                                 options={desenvOptions} validFeedback="Desenvolvimento OK" 
                                 invalidFeedback="Selecione a desenvolvimento"/>
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

export default FormPlataforma;