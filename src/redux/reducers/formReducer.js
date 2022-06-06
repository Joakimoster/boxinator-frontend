import {
    ADD_BOX,
    GET_BOXES
} from "../actions/types"

const initialState = [];

const formReducer = (boxes = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_BOX:
            return [...boxes, payload];
        case GET_BOXES:
            return payload;
        default:
            return boxes;
    }
}

export default formReducer;














/*const initialState = {
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
}*/