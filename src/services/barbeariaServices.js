import axios from 'axios';

export const getApiUrl = () => {
    return "http://barbeariareact-001-site1.htempurl.com";
}

export const getDadosBarbearia = () => {
    return axios.get(getApiUrl() + "/api/barbearia")
    .then(
        response => {return response.data;}
    )
}

export const getDadosServicos = () =>{
    return axios.get(getApiUrl()+ "/api/servicos")
    .then(
        response => {return response.data;}
    )
}

export const postCliente = (cliente) => {
    return axios.post(getApiUrl() + "/api/cliente", cliente)
        .then(
            response => { return response.data; }
        )
}
