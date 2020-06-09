import { all } from 'redux-saga/effects'
import ApplicationSagas from './application-saga';
import TagSagas from '../components/tagCard/shared/tagSagas';
import GlobalFeedSagas from '../components/globalFeed/shared/globalFeedSagas';
import UserFeedSagas from '../components/userFeed/shared/userFeedSagas';
import ArticlePostSagas from '../components/newArticlePost/shared/newArticlePostSaga';
import UserSettingsSagas from '../components/settings/shared/userSettingsSaga';

export default function* IndexSagas() {
    yield all([
        ApplicationSagas(),
        TagSagas(),
        GlobalFeedSagas(),
        UserFeedSagas(),
        ArticlePostSagas(),
        UserSettingsSagas()
    ])
}