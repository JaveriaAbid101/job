import {
    LOGIN_SUCCESSFUL,
    FORGOT_PASSWORD_SUCCESSFUL,
    ERROR_FORGOT_PASSWORD_ALERT,
    ERROR_LOGIN_ALERT,
    REQUEST_PENDING,
    SIGNUP_SUCCESSFUL,
    ERROR_SIGNUP_ALERT,
    RESET_PASSWORD_SUCCESSFUL,
    ERROR_RESET_PASSWORD_ALERT
} from "./actionTypes";
import tugageApi from '../config'
import {setToken} from '../utils'
export const signupAction = userInfo => async dispatch => {
    try{
        const response = await tugageApi.post('/users', userInfo);
        dispatch({type: SIGNUP_SUCCESSFUL, payload: response.data});
    } catch (error) {
        dispatch({type: ERROR_SIGNUP_ALERT});
    }
}

export const loginAction = (email, password) => async dispatch => {
    try {
        dispatch({type: REQUEST_PENDING});
        const response = await tugageApi.post('/auth/sign-in', {email, password});

        dispatch({type: LOGIN_SUCCESSFUL, payload: response.data});
        setToken(response.data.token)
    } catch (error) {
        dispatch({type: ERROR_LOGIN_ALERT});
    }
    
}

export const forgotPasswordAction = email => async dispatch => {
    try{
        dispatch({type: REQUEST_PENDING});
        const response = await tugageApi.post('/users/forgot-password', {email});
        dispatch({type: FORGOT_PASSWORD_SUCCESSFUL, payload: response.data});
    } catch (error){
        dispatch({type: ERROR_FORGOT_PASSWORD_ALERT});
    }
}

export const resetPasswordAction = (password, token) => async dispatch => {
    dispatch({type: REQUEST_PENDING});
    try {
        dispatch({type: REQUEST_PENDING});
        await tugageApi.post(`/users/reset-password/${token}`, {password});
        dispatch({type: RESET_PASSWORD_SUCCESSFUL})
    } catch (error) {
        dispatch({type: ERROR_RESET_PASSWORD_ALERT});
    }
}