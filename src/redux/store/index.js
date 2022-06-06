import { configureStore } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { formSlice } from "../reducers/formSlice";

export default configureStore({
    reducer: {
        boxes: formSlice,
    },
})