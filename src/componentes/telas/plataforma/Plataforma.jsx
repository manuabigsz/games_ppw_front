import { useState, useEffect } from "react";
import PlataformaContext from "./PlataformaContext";
import {
    getPlataformaAPI, getPlataformaPorCodigoAPI,
    deletePlataformaPorCodigoAPI, cadastraPlataformaAPI
} from "../../../servicos/PlataformaSevico";
import Tabela from "./TabelaPlataforma";
import FormPlataforma from "./FormPlataforma";

function Plataforma() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: 0, nome: "" });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({ codigo: 0, nome: "" });
    }

    const editarObjeto = async codigo => {
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setObjeto(await getPlataformaPorCodigoAPI(codigo));
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? 'PUT' : 'POST';
        try {
            let retornoAPI = await cadastraPlataformaAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err)
        }
        recuperaPlataformas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaPlataformas = async () => {
        setListaObjetos(await getPlataformaAPI());
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deletePlataformaPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaPlataformas();
        }
    }

    useEffect(() => {
        recuperaPlataformas();
    }, []);

    return (
        <PlataformaContext.Provider
            value={{
                alerta, listaObjetos, remover, objeto, editar,
                acaoCadastrar, handleChange, novoObjeto, editarObjeto
            }}>
            <Tabela />
            <FormPlataforma/>
        </PlataformaContext.Provider>
    )
}

export default Plataforma;