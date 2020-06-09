import {
  FETCH_USER_FEED_ACTION,
  FETCH_USER_FEED_SUCCESS_ACTION,
  FETCH_USER_FEED_FAILURE_ACTION
} from './constant';

const initialState = {
  articles: [],
  isUserFeedLoading: false,
  userArticlesLoadingErrorMessage: '',
  totalGlobalArticleCount:0
};

function GlobalArticleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_FEED_ACTION: {
      return {
        ...initialState,
        isUserFeedLoading: true
      }
    }
    case FETCH_USER_FEED_SUCCESS_ACTION: {
      return {
        ...initialState, isUserFeedLoading: false,
        articles: action.data.data.articles

      };
    }
    case FETCH_USER_FEED_FAILURE_ACTION: {
      return {
        ...initialState, userArticlesLoadingErrorMessage: 'Error while loading Articles',
        isUserFeedLoading: false
      }
    }

    default:
      return state;
  }
}

export default GlobalArticleReducer;
