import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducers/reducerIndex";
import { formMiddleware } from "../middleware/formMiddleware";
import { Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { formSlice } from "../reducers/formSlice";

export default configureStore({
    reducer: {
        form: formSlice,
    }
})