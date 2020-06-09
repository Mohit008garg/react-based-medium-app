import {
  FETCH_TAGS_ACTION,
  FETCH_TAGS_SUCCESS_ACTION,
  FETCH_TAGS_FAILURE_ACTION
} from './constant';

const initialState = {
  tags: [],
  selectedTag: '',
  isTagLoading: false,
  tagLoadingErrorMessage: ''
};

function TagReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS_ACTION: {
      return {
        ...initialState,
        isTagLoading: true
      }
    }
    case FETCH_TAGS_SUCCESS_ACTION: {
      return {
        ...initialState, isTagLoading: false,
        tags: action.data.data.tags

      };
    }
    case FETCH_TAGS_FAILURE_ACTION: {
      return {
        ...initialState, tagLoadingErrorMessage: 'Error while loading tags',
        isTagLoading: false
      }
    }

    default:
      return state;
  }
}

export default TagReducer;
