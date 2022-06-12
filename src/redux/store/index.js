import { configureStore } from "@reduxjs/toolkit";
import BoxReducer from "../slices/BoxFormSlice"
import FetchUserReducer from "../slices/FetchUserSlice"

const store = configureStore({
    reducer: {
        app: BoxReducer,
        boxes: FetchUserReducer,
    },
});

export default store;