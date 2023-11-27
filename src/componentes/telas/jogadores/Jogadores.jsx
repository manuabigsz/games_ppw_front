import { useState, useEffect } from "react";
import JogadoresContext from "./JogadoresContext";
import {
    getJogadorAPI, getJogadorPorCodigoAPI,
    deleteJogadorPorCodigoAPI, cadastraJogadorAPI
} from "../../../servicos/JogadoresServico";
import TabelaJogadores from "./TabelaJogadores";
import FormJogadores from "./FormJogadores";

import WithAuth from "../../seg/WithAuth";


function Jogadores() {

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
        setObjeto(await getJogadorPorCodigoAPI(codigo));
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? 'PUT' : 'POST';
        try {
            let retornoAPI = await cadastraJogadorAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err)
        }
        recuperaJogadores();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaJogadores = async () => {
        setListaObjetos(await getJogadorAPI());
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteJogadorPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaJogadores();
        }
    }

    useEffect(() => {
        recuperaJogadores();
    }, []);

    return (
        <JogadoresContext.Provider
            value={{
                alerta, listaObjetos, remover, objeto, editar,
                acaoCadastrar, handleChange, novoObjeto, editarObjeto
            }}>
            <TabelaJogadores />
            <FormJogadores/>
        </JogadoresContext.Provider>
    )
}

export default WithAuth(Jogadores);