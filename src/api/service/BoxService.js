import axios from "axios";

const BOXINATOR_REST_API_URL = 'http:/localhost:8080/api/box/v1'

class BoxDataService {

    getAll = () => {
        return axios.get("/boxes");
    }
    addBox = data => {
        return axios.post("/box", data);
    }
}

export default new BoxDataService();