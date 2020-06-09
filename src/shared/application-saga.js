

import { takeLatest, put, call } from 'redux-saga/effects';

import {
    USER_SIGNUP_ACTION,
    USER_SIGIN_ACTION,
    USER_SIGNUP_SUCCESS_ACTION,
    USER_SIGNUP_FAILURE_ACTION,
    USER_SIGIN_SUCCESS_ACTION,
    USER_SIGIN_FAILURE_ACTION
} from '../components/signUpOrSignIn/constants';

import history from '../history';
import {
    loginUser,
    registerUser
} from '../services/authentication-service';
import { USER_LOGOUT_ACTION } from '../components/settings/shared/constant';


function* userSignUp(action) {
    try {
        const data = yield call(registerUser, action.payload);
        yield put({ type: USER_SIGNUP_SUCCESS_ACTION, data })
        history.push('/');
    } catch (error) {
        yield put({ type: USER_SIGNUP_FAILURE_ACTION, error })
    }
}

function* userSignIn(action) {
    try {
        const data = yield call(loginUser, action.payload);
        yield put({ type: USER_SIGIN_SUCCESS_ACTION, data })
        history.push('/');
    } catch (error) {
        yield put({ type: USER_SIGIN_FAILURE_ACTION, error })
    }
}

function* logout(action) {
   yield history.push('/');
}



function* getMasterDataWatcher() {
    yield takeLatest(USER_SIGNUP_ACTION, userSignUp);
    yield takeLatest(USER_SIGIN_ACTION, userSignIn);
    yield takeLatest(USER_LOGOUT_ACTION, logout);
}

export default getMasterDataWatcher;