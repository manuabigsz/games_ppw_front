import { getToken } from "../seguranca/Autenticacao";

export const getPlataformaAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/plataforma`,
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

export const getPlataformaPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/plataforma/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const deletePlataformaPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/plataforma/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const cadastraPlataformaAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/plataforma`,
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
