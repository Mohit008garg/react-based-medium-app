

import { takeLatest, put, call } from 'redux-saga/effects';

import {
    FETCH_TAGS_ACTION,
    FETCH_TAGS_SUCCESS_ACTION,
    FETCH_TAGS_FAILURE_ACTION
  } from './constant';

import {
    fetchTagsService
} from './tagService';


function* fetchTags(action) {
    try {
        const data = yield call(fetchTagsService, action.payload);
        yield put({ type: FETCH_TAGS_SUCCESS_ACTION, data })
    } catch (error) {
        yield put({ type: FETCH_TAGS_FAILURE_ACTION, error })
    }
}



function* tagWatcher() {
    yield takeLatest(FETCH_TAGS_ACTION, fetchTags);
}

export default tagWatcher;