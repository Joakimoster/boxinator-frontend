import http from "../http-common";

const getAll = () => {
    return http.get("/boxes");
}

const addBox = data => {
    return http.post("/box", data);
}

const BoxService = {
    getAll,
    addBox
}

export default BoxService
