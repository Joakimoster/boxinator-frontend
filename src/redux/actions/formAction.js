import {
    ADD_BOX,
    GET_BOXES
} from "./types"

import BoxService from "../../api/service/BoxService"

export const addBox = (name, weight, color, shippingCost) => async (dispatch) => {
    try {
        const res = await BoxService.create({ name, weight, color, shippingCost });

        dispatch({
            type: ADD_BOX,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getBoxes = () => async (dispatch) => {
    try {
        const res = await BoxService.getAll();

        dispatch({
            type: GET_BOXES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}