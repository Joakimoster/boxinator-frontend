import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk(
    'box/fetchusers',
    async () => {
        return fetch ('http://localhost:8080/api/box/v1/boxes')
        .then((response) => response.json());
    })

const boxSlice = createSlice({
    name: 'boxes',
    initialState: {
        loading: false,
        boxes: [],
        status: null
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
            state.status = "loading"
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.boxes = action.payload
            state.status = "success"
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.status = "rejected"
        })
    }   
})

export default boxSlice.reducer