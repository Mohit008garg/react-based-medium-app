

import { takeLatest, put, call } from 'redux-saga/effects';

import {
    FETCH_USER_FEED_ACTION,
    FETCH_USER_FEED_SUCCESS_ACTION,
    FETCH_USER_FEED_FAILURE_ACTION
  } from './constant';

import {
    fetchUserFeedService
} from './userFeedService';


function* fetchGlobalFeed(action) {
    try {
        const data = yield call(fetchUserFeedService, action.payload);
        yield put({ type: FETCH_USER_FEED_SUCCESS_ACTION, data })
    } catch (error) {
        yield put({ type: FETCH_USER_FEED_FAILURE_ACTION, error })
    }
}



function* userFeedWatcher() {
    yield takeLatest(FETCH_USER_FEED_ACTION, fetchGlobalFeed);
}

export default userFeedWatcher;