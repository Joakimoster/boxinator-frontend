import { configureStore } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import BoxReducer from "../slices/boxFormSlice"

const store = configureStore({
    reducer: {
        app: BoxReducer,
    },
});

export default store;