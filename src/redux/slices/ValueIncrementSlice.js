import { createSlice } from "@reduxjs/toolkit";



const valueIncrementerSlice = createSlice({
    name: 'incrementer',
    initialState : {
        totalWeight: 0,
        totalShippingCost: 0,
        totalRows: 0
    },

    reducers: {
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
})

//export const { incrementTotalRows } = createSlice.actions

export default valueIncrementerSlice.reducer