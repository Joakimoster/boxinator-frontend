import { configureStore } from "@reduxjs/toolkit";
import BoxReducer from "../slices/BoxFormSlice"

const store = configureStore({
    reducer: {
        app: BoxReducer,
    },
});

export default store;