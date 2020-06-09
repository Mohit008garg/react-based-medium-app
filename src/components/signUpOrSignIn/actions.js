import {
    USER_SIGNUP_ACTION,
    USER_SIGIN_ACTION
} from './constants';

export const userRegisterAction = (username, email, password) => ({
    type: USER_SIGNUP_ACTION,
    payload:{username, email, password}
});

export const userLoginAction = (userName, password) => ({
    type: USER_SIGIN_ACTION,
    payload:{userName, password}
});