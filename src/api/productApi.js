import http from "./axiosHttp";

const getAll = () =>{
    return http.get("/products");
}

const get = id => {
    return http.get(`products/${id}`);
}

const create = data => {
    return http.post("/products", data);
}

const update = (id, data) => {
    return http.put(`/products/${id}`);
}

const remove = id => {
    return http.delete(`/products/${id}`)
}

const fullTextSearch = (data) => {
    return http.get(`/products?q=${data}`)
}

export default {
    fullTextSearch,
    getAll,
    get,
    create,
    update,
    remove
}
