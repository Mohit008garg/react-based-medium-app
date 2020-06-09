import {
    REGISTER_USER_API_END_POINT,
    LOGIN_USER_API_END_POINT
} from '../components/signUpOrSignIn/constants';
import http from './http-service';

export const registerUser = ({ username, email, password }) => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}${REGISTER_USER_API_END_POINT}`;
    return http.post(url, {
        user: {
            username,
            email, password
        }
    });
}

export const loginUser = ({ userName, password }) => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}${LOGIN_USER_API_END_POINT}`;
    return http.post(url, {
        user: {
            email: userName, password
        }
    });
}
