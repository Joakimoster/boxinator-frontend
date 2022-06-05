import { ACTION_FORM_SUBMIT_ATTEMPTING, ACTION_FORM_SUBMIT_SUCCESS } from "../../actions/formAction"

export const formMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if(action.type === ACTION_FORM_SUBMIT_ATTEMPTING) {

    }

    if(action.type === ACTION_FORM_SUBMIT_SUCCESS) {
        
    }
}