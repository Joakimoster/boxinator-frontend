import { createSlice } from "@reduxjs/toolkit";


export const valueIncrementerSlice = createSlice({
    name: 'incrementer',
    initialState : {
        totalWeight: 0,
        totalShippingCost: 0,
        totalRows: 0
    },

    reducers: {
        increment: (state) => {
            state.totalWeight += 1
        },
        incrementTotalWeight: (state, action) => {
            state.totalWeight = action.payload;
        },
        incrementTotalShippignCost: (state, action) => {
            state.totalShippingCost = action.payload;
        },
        incrementTotalRows: (state, action) => {
            state.totalRows +=1;
        }
    },
});

export const { increment } = valueIncrementerSlice.actions

export default valueIncrementerSlice.reducer