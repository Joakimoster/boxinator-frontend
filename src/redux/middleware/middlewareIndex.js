import { applyMiddleware } from "redux";
import { formMiddleware } from "./formMiddleware";

export default applyMiddleware(
    formMiddleware
)