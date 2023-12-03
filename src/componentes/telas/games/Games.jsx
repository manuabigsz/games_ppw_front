import { useState, useEffect } from "react";
import GamesContext from "./GamesContext";
import {
    getGamesAPI, getGamesPorCodigoAPI,
    deleteGamesPorCodigoAPI, cadastraGamesAPI
} from "../../../servicos/GamesServico";
import TabelaGames from "./TabelaGames";
import FormGames from "./FormGames";
import "../../../index.css";

import WithAuth from "../../seg/WithAuth";
import { getPlataformaAPI } from "../../../servicos/PlataformaSevico";
import { getCategoriasAPI } from "../../../servicos/CategoriaServico";
import { getDesenvolvimentoAPI } from "../../../servicos/DesenvolvimentoServico";


function Games() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: 0, nome: "" });
    const [listaPlataformas, setListaPlataformas] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaDesenv, setListaDesenv] = useState([]);
    
    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({ codigo: 0, nome: "" });
    }

    const editarObjeto = async codigo => {
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setObjeto(await getGamesPorCodigoAPI(codigo));
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? 'PUT' : 'POST';
        try {
            let retornoAPI = await cadastraGamesAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err)
        }
        recuperaGames();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaGames = async () => {
        setListaObjetos(await getGamesAPI());
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteGamesPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaGames();
        }
    }

    const recuperaPlataformas = async () => {
        setListaPlataformas(await getPlataformaAPI());
    }

    const recuperaCategorias = async () => {
        setListaCategorias(await getCategoriasAPI());
    }
    const recuperaDesenv = async () => {
        setListaDesenv(await getDesenvolvimentoAPI());
    }

    useEffect(() => {
        recuperaPlataformas();
        recuperaCategorias();
        recuperaDesenv();
        recuperaGames();
    }, []);

    return (
        <GamesContext.Provider
            value={{
                alerta, listaObjetos, remover, objeto, editar,
                acaoCadastrar, handleChange, novoObjeto, editarObjeto,
                listaPlataformas, listaCategorias,listaDesenv
            }}>
            <div >
                <TabelaGames />
                <FormGames />
            </div>
        </GamesContext.Provider>
    )
}

export default WithAuth(Games);