import axios from "axios";

export default axios.create({
    baseURL: "localhost:8080/api/box/v1",
    headers: {
        "Content-type": "application/json"
    }
});