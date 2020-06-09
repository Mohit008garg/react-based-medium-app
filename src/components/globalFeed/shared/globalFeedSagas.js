

import { takeLatest, put, call } from 'redux-saga/effects';

import {
    FETCH_GLOBAL_FEED_ACTION,
    FETCH_GLOBAL_FEED_SUCCESS_ACTION,
    FETCH_GLOBAL_FEED_FAILURE_ACTION
  } from './constant';

import {
    fetchGlobalFeedService
} from './globalFeedService';


function* fetchGlobalFeed(action) {
    try {
        const data = yield call(fetchGlobalFeedService, action.payload);
        yield put({ type: FETCH_GLOBAL_FEED_SUCCESS_ACTION, data })
    } catch (error) {
        yield put({ type: FETCH_GLOBAL_FEED_FAILURE_ACTION, error })
    }
}



function* globalFeedWatcher() {
    yield takeLatest(FETCH_GLOBAL_FEED_ACTION, fetchGlobalFeed);
}

export default globalFeedWatcher;