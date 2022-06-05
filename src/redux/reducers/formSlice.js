import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const formSlice = createSlice({

    name: 'newBox',
    initialState,

    reducers: {
        submit: (state, action) => {
            state.newBox = action.payload;
        }
    }
})