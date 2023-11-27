import { getToken } from "../seguranca/Autenticacao";

export const getJogadorAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "authorization": getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const getJogadorPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const deleteJogadorPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const cadastraJogadorAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador`,
    {
        method : metodo,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(objeto)
    });
    const data = await response.json();
    return data;
}
