import { configureStore } from "@reduxjs/toolkit";
import BoxReducer from "../slices/BoxFormSlice"
import FetchBoxDispatchesReducer from "../slices/FetchBoxDispatchesSlice"

const store = configureStore({
    reducer: {
        app: BoxReducer,
        boxes: FetchBoxDispatchesReducer,
    },
});

export default store;