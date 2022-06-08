import { configureStore } from "@reduxjs/toolkit";
import BoxReducer from "../slices/BoxFormSlice"
import FetchUserReducer from "../slices/FetchUserSlice"
import ValueIncrementReducer from "../slices/ValueIncrementSlice"

const store = configureStore({
    reducer: {
        app: BoxReducer,
        boxes: FetchUserReducer,
        incrementer: ValueIncrementReducer
    },
});

export default store;