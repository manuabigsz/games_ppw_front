export const getGamesAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/games`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const getGamesPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/games/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const deleteGamesPorCodigoAPI = async codigo => {
    const response = await 
    fetch(`${process.env.REACT_APP_ENDERECO_API}/games/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const cadastraGamesAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/games`,
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
