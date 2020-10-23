import initialState from "./initialState";
import {
    FORGOT_PASSWORD_SUCCESSFUL,
    ERROR_FORGOT_PASSWORD_ALERT,
    ERROR_LOGIN_ALERT,
    LOGIN_SUCCESSFUL,
    REQUEST_PENDING,
    SIGNUP_SUCCESSFUL,
    ERROR_SIGNUP_ALERT,
    RESET_PASSWORD_SUCCESSFUL,
    ERROR_RESET_PASSWORD_ALERT
} from "../actions/actionTypes";

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {...state, user: action.payload, isLoggedIn: true, loading: false};
        case ERROR_LOGIN_ALERT:
            return {...state, user: null, isLoggedIn: false, loading: false};
        case SIGNUP_SUCCESSFUL:
            return {...state, isRegistered: true, loading: false}
        case ERROR_SIGNUP_ALERT:
            return {...state, isRegistered: false, loading: false}
        case FORGOT_PASSWORD_SUCCESSFUL:
            return {...state, isPasswordChangeRequestSuccessful: true, loading: false}
        case ERROR_FORGOT_PASSWORD_ALERT:
            return {...state, isPasswordChangeRequestSuccessful: false, loading: false}
        case RESET_PASSWORD_SUCCESSFUL:
            return {...state, hasResetPassword: true, loading: false}
        case ERROR_RESET_PASSWORD_ALERT:
            return {...state, hasResetPassword: false, loading: false}
        case REQUEST_PENDING:
            return {...state, loading: true}
        default:
            return state;
    }
}