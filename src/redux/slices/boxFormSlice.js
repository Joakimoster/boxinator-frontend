import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllBoxes = createAsyncThunk(
    "box/getBoxes",
    async () => {
        return fetch (`https://localhost:8080/api/box/v1/boxes`)
        .then((res) => {
            res.json();
        });
    });

export const createNewBox = createAsyncThunk(
    "box/createNewBox",
    async ({ values }) => {
        return fetch ("https://localhost:8080/api/box/v1/box", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: values.name,
                weight: values.weight,
                color: values.color,
                shippingCost: values.shippingCost
            }),
        }).then((res) => res.json());
    }
)

const boxFormSlice = createSlice({

    name: 'boxes',  //Name to identify the slice
    initialState: {
        box: [],
        loading: false,
        error: null
    },

    extraReducers: {    //Reducers

        [createNewBox.pending]: (state, action) => {
            state.loading = true;
        },
        [createNewBox.fulfilled]: (state, action) => {
            state.loading = false;
            state.box = [action.payload];
        },
        [createNewBox.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getAllBoxes.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllBoxes.fulfilled]: (state, action) => {
            state.loading = false;
            state.box = [action.payload];
        },
        [getAllBoxes.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
}
)

export default boxFormSlice.reducer;