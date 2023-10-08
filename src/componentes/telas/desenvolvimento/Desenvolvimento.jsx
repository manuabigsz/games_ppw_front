import { useState, useEffect } from "react";
import DesenvolvimentoContext from "./DesenvolvimentoContext";
import {
    getDesenvolvimentoAPI, getDesenvolvimentoPorCodigoAPI,
    deleteDesenvolvimentoPorCodigoAPI, cadastraDesenvolvimentoAPI
} from "../../../servicos/DesenvolvimentoServico";
import TabelaDesenvolvimento from "./TabelaDesenvolvimento";
import FormDesenvolvimento from "./FormDesenvolvimento";

function Desenvolvimento() {

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
        setObjeto(await getDesenvolvimentoPorCodigoAPI(codigo));
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? 'PUT' : 'POST';
        try {
            let retornoAPI = await cadastraDesenvolvimentoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err)
        }
        recuperaDesenvolvimentos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaDesenvolvimentos = async () => {
        setListaObjetos(await getDesenvolvimentoAPI());
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteDesenvolvimentoPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaDesenvolvimentos();
        }
    }

    useEffect(() => {
        recuperaDesenvolvimentos();
    }, []);

    return (
        <DesenvolvimentoContext.Provider
            value={{
                alerta, listaObjetos, remover, objeto, editar,
                acaoCadastrar, handleChange, novoObjeto, editarObjeto
            }}>
            <TabelaDesenvolvimento />
            <FormDesenvolvimento/>
        </DesenvolvimentoContext.Provider>
    )
}

export default Desenvolvimento;