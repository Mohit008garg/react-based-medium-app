import {
  USER_SETTING_SAVE_ACTION,
  USER_SETTING_SAVE_SUCCESS_ACTION,
  USER_SETTING_SAVE_FAILURE_ACTION
} from './constant';

const initialState = {
  isUserSetingsSavingInProgress: false,
  userSettingsSaveSuccessMessage: '',
  userSettingsSaveErrorMessage: '',
};

function GlobalArticleReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SETTING_SAVE_ACTION: {
      return {
        ...initialState,
        isUserSetingsSavingInProgress: true
      }
    }
    case USER_SETTING_SAVE_SUCCESS_ACTION: {
      return {
        ...initialState, isUserSetingsSavingInProgress: false,
        userSettingsSaveSuccessMessage: 'User Setting Saved Successfully'

      };
    }
    case USER_SETTING_SAVE_FAILURE_ACTION: {
      return {
        ...initialState, userSettingsSaveErrorMessage: 'Error while saving User Settings',
        isUserSetingsSavingInProgress: false
      }
    }

    default:
      return state;
  }
}

export default GlobalArticleReducer;
