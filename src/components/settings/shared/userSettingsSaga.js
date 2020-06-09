

import { takeLatest, put, call } from 'redux-saga/effects';

import {
    USER_SETTING_SAVE_ACTION,
    USER_SETTING_SAVE_SUCCESS_ACTION,
    USER_SETTING_SAVE_FAILURE_ACTION
  } from './constant';

import {
    saveUserSettingService
} from './userSettingsService';


function* fetchGlobalFeed(action) {
    try {
        const data = yield call(saveUserSettingService, action.payload);
        yield put({ type: USER_SETTING_SAVE_SUCCESS_ACTION, data })
    } catch (error) {
        yield put({ type: USER_SETTING_SAVE_FAILURE_ACTION, error })
    }
}



function* userFeedWatcher() {
    yield takeLatest(USER_SETTING_SAVE_ACTION, fetchGlobalFeed);
}

export default userFeedWatcher;