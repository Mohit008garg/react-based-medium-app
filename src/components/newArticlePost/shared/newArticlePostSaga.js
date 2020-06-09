

import { takeLatest, put, call } from 'redux-saga/effects';

import {
    NEW_ARTICLE_POST_ACTION,
    NEW_ARTICLE_POST_ACTION_SUCCESS_ACTION,
    NEW_ARTICLE_POST_ACTION_FAILURE_ACTION
  } from './constant';

import {
    submitUserPost
} from './newArticlePostService';


function* articlePost(action) {
    try {
        const data = yield call(submitUserPost, action.payload);
        yield put({ type: NEW_ARTICLE_POST_ACTION_SUCCESS_ACTION, data })
    } catch (error) {
        yield put({ type: NEW_ARTICLE_POST_ACTION_FAILURE_ACTION, error })
    }
}



function* articlePostWatcher() {
    yield takeLatest(NEW_ARTICLE_POST_ACTION, articlePost);
}

export default articlePostWatcher;