//import http from "../http-common";
import axios from "axios";

class BoxDataService {
    getAll = () => {
        return axios.get("/boxes");
    }
    addBox = data => {
        return axios.post("/box", data);
    }
}

export default new BoxDataService();