import { getToken } from "../seguranca/Autenticacao";

export const getDesenvolvimentoAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/desenvolvimento`,
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

export const getDesenvolvimentoPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/desenvolvimento/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const deleteDesenvolvimentoPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/desenvolvimento/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const cadastraDesenvolvimentoAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/desenvolvimento`,
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
