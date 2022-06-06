import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    weight: null,
    color: '',
    shippingCost: null
};

const formSlice = createSlice({

    name: 'boxes',
    initialState,

    reducers: {
        addNewBox: (state, param) => {
            const { payload } = param;
            state.boxes = [...state.boxes, payload]
        }
    }
})

const { actions, reducer } = formSlice;
export const { addNewBox } = actions;
export default reducer;