import { configureStore } from "@reduxjs/toolkit";
import BoxFormReducer from "../slices/FormBoxSlice"
import FetchBoxDispatchesReducer from "../slices/FetchBoxDispatchesSlice"

const store = configureStore({
    reducer: {
        form: BoxFormReducer,
        boxes: FetchBoxDispatchesReducer,
    },
});

export default store;