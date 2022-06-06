import axios from "axios";

export default axios.create({
    baseURL: "localhost:8080/api/box/v1",
    headers: {
        "Content-type": "application/json"
    }
});

/*export const createBox = (postData) => {
    return axios.get(
        "localhost:8080/api/box/v1/box",
        postData
    )
}

export const getBoxes = () => {
    return axios.get(
        "localhost:8080/api/box/v1/boxes"
    )
}*/