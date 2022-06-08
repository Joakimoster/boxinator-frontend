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
        status: 'idle',
        totalWeight: 0,
        totalShippingCost: 0,
    },

    reducers: {
        calculateTotalShippingCost: (state) => {
            let shippingCost = 0;
            let weight = 0;
            state.boxes.forEach((item) => {
                const totalCost = item.weight * item.country;   //Todo country är en string och kan inte användas i *(gånger).
                shippingCost += totalCost;
                weight += item.weight;
            });
            state.totalShippingCost = shippingCost;
            state.totalWeight = weight;
        },
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
});

export const { calculateTotalWeight, calculateTotalShippingCost } = boxSlice.actions

export default boxSlice.reducer