import { combineReducers } from 'redux';
import AppReducer from './application-reducer';
import TagReducer from '../components/tagCard/shared/tagReducer';
import GlobalFeedReducer from '../components/globalFeed/shared/globalFeedReducer';
import UserFeedReducer from '../components/userFeed/shared/userFeedReducer';
import ArticlePostReducer from '../components/newArticlePost/shared/newArticlePostReducer';
import SettingsReducer from '../components/settings/shared/userSettingsReducer';


const indexReducer = combineReducers({
    AppReducer,
    TagReducer,
    GlobalFeedReducer,
    UserFeedReducer,
    ArticlePostReducer,
    SettingsReducer
});

export default indexReducer;