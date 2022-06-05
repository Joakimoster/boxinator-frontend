import { ACTION_FORM_SUBMIT_ATTEMPTING, ACTION_FORM_SUBMIT_ERROR, ACTION_FORM_SUBMIT_SUCCESS } from "../../actions/formAction"

const initialState = {
    formAttempting: false,
    onSubmitError: ''
}

export const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_FORM_SUBMIT_ATTEMPTING:
            return {
                ...state,
                formAttempting: true,
                onSubmitError: ''
            }
        case ACTION_FORM_SUBMIT_SUCCESS:
            return {
                ...initialState
            }
        case ACTION_FORM_SUBMIT_ERROR:
            return {
                ...state,
                formAttempting: false,
                onSubmitError: action.payload
            }
        default:
            return state;
    }
}