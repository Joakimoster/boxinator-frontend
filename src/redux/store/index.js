import { configureStore } from "@reduxjs/toolkit";
import BoxReducer from "../slices/boxFormSlice"

const store = configureStore({
    reducer: {
        app: BoxReducer,
    },
});

export default store;