import axios from "axios";

export const getBoxes = () => {
    return (dispatch) => {
        axios.get("localhost:8080/api/box/v1/boxes")
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_BOXES',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        });
    }
}

export const setBox = boxId => {
    return {
        type: 'SET_BOX',
        payload: boxId
    }
}

export const addBox = boxObj => {
    return (dispatch) => {
        axios.post('localhost:8080/api/box/v1/box', boxObj)
        .then(response => {
            dispatch({
                type: 'ADD_BOX',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}