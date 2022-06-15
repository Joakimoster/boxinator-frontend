import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewBox = createAsyncThunk(
    "box/createNewBox",
    async ({ values }) => {
        return fetch ("http://localhost:8080/api/box/v1/box", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: values.name,
                weight: values.weight,
                color: values.color,
                country: values.country
            }),
        }).then((res) => res.json());
    }
)

const boxFormSlice = createSlice({
    name: 'boxes',
    initialState: {
        box: [],
        loading: false,
        status: ''
    },
    extraReducers: (builder) => {
        builder.addCase(createNewBox.pending, (state, action) => {
            state.loading = true;
            state.status = "loading";
        })
        builder.addCase(createNewBox.fulfilled, (state, action) => {
            state.loading = false;
            state.box = action.payload;
            state.status = "success";
        })
        builder.addCase(createNewBox.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = "rejected";
        })
    }
});

export default boxFormSlice.reducer;