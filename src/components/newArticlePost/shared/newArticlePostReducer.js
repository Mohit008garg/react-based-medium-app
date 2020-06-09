import {
  NEW_ARTICLE_POST_ACTION,
  NEW_ARTICLE_POST_ACTION_SUCCESS_ACTION,
  NEW_ARTICLE_POST_ACTION_FAILURE_ACTION
} from './constant';

const initialState = {
  isArticlePostSubmitting: false,
  articlePostSubmitErrorMessage: '',
  articlePostSubmitSuccessMessage: ''
};

function GlobalArticleReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ARTICLE_POST_ACTION: {
      return {
        ...initialState,
        isArticlePostSubmitting: true
      }
    }
    case NEW_ARTICLE_POST_ACTION_SUCCESS_ACTION: {
      return {
        ...initialState, isArticlePostSubmitting: false,
        articlePostSubmitSuccessMessage: 'Post submitted successfully'

      };
    }
    case NEW_ARTICLE_POST_ACTION_FAILURE_ACTION: {
      return {
        ...initialState, 
        articlePostSubmitErrorMessage: 'Error while posting article',
        isArticlePostSubmitting: false
      }
    }

    default:
      return state;
  }
}

export default GlobalArticleReducer;
