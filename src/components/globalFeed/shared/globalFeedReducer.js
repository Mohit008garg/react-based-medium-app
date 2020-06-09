import {
  FETCH_GLOBAL_FEED_ACTION,
  FETCH_GLOBAL_FEED_SUCCESS_ACTION,
  FETCH_GLOBAL_FEED_FAILURE_ACTION
} from './constant';

const initialState = {
  articles: [],
  isGlobalArticlesLoading: false,
  globalArticlesLoadingErrorMessage: '',
  totalGlobalArticleCount:0
};

function GlobalArticleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GLOBAL_FEED_ACTION: {
      return {
        ...initialState,
        isGlobalArticlesLoading: true
      }
    }
    case FETCH_GLOBAL_FEED_SUCCESS_ACTION: {
      return {
        ...initialState, isGlobalArticlesLoading: false,
        articles: action.data.data.articles

      };
    }
    case FETCH_GLOBAL_FEED_FAILURE_ACTION: {
      return {
        ...initialState, globalArticlesLoadingErrorMessage: 'Error while loading Articles',
        isGlobalArticlesLoading: false
      }
    }

    default:
      return state;
  }
}

export default GlobalArticleReducer;
