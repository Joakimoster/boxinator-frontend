import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchBoxes = createAsyncThunk(
    'box/fetchboxes',
    async () => {
        return fetch ('http://localhost:8080/api/boxinator/v1/boxes')
        .then((response) => response.json());
    })

const boxSlice = createSlice({
    name: 'boxes',
    initialState: {
        boxes: [],
        loading: false,
        status: '',
        totalWeight: 0,
        totalShippingCost: 0,
    },

    reducers: {
        calculateTotalShippingCostAndTotalWeight: (state) => {
            let shippingCost = 0;
            let weight = 0;

            state.boxes.forEach((item) => {
                shippingCost += item.shippingCost;
                weight += item.weight;
            });
            
            state.totalShippingCost = shippingCost;
            state.totalWeight = weight;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBoxes.pending, (state) => {
            state.loading = true;
            state.status = "loading";
        })
        builder.addCase(fetchBoxes.fulfilled, (state, action) => {
            state.loading = false;
            state.boxes = action.payload;
            state.status = "success";
        })
        builder.addCase(fetchBoxes.rejected, (state, action) => {
            state.loading = false;
            state.status = "rejected";
        })
    }   
});

export const { calculateTotalShippingCostAndTotalWeight } = boxSlice.actions

export default boxSlice.reducer