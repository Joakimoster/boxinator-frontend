export const ACTION_FORM_SUBMIT_ATTEMPTING = '[submit] ATTEMPT';
export const ACTION_FORM_SUBMIT_SUCCESS = '[submit] SUCCESS';
export const ACTION_FORM_SUBMIT_ERROR = '[submit] ERROR';

export const formSubmitAttemptingAction = inputs => ({
    type: ACTION_FORM_SUBMIT_ATTEMPTING,
    payload: inputs
})

export const formSubmitSucessAction = validData => ({
    type: ACTION_FORM_SUBMIT_SUCCESS,
    payload: validData
})

export const formSubmitErrorAction = error => ({
    type: ACTION_FORM_SUBMIT_ERROR,
    payload: error
})