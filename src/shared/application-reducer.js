import {
  USER_SIGNUP_SUCCESS_ACTION,
  USER_SIGNUP_FAILURE_ACTION,
  USER_SIGIN_SUCCESS_ACTION,
  USER_SIGIN_FAILURE_ACTION,
  USER_SIGNUP_ACTION,
  USER_SIGIN_ACTION
} from '../components/signUpOrSignIn/constants';
import { APP_USER_TOKEN } from './constants';
import { USER_LOGOUT_ACTION } from '../components/settings/shared/constant';

const userInitialState = {
  isUserLoggedIn: false,
  email: '',
  id: '',
  username: '',
  token: '',
  userSignUpSIgnInFailureMessage: '',
  isUserRsgisteringOrLoggingInProgress: false
}
const initialState = {
  user: { ...userInitialState }
};

function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SIGNUP_ACTION:
    case USER_SIGIN_ACTION: {
      return {
        ...state,
        user: { ...userInitialState, isUserRsgisteringOrLoggingInProgress: true }
      }
    }
    case USER_SIGIN_SUCCESS_ACTION:
    case USER_SIGNUP_SUCCESS_ACTION: {
      const userInfo = action.data.data.user;
      const { email, id, username, token, bio, image } = userInfo;
      localStorage.setItem(APP_USER_TOKEN, token);
      return {
        ...state,
        user: {
          ...userInitialState, isUserLoggedIn: true,
          email, id, username, token, bio, image,
          isUserRsgisteringOrLoggingInProgress: false
        }
      };
    }
    case USER_SIGIN_FAILURE_ACTION: {
      return {
        ...state,
        user: {
          ...userInitialState, userSignUpSIgnInFailureMessage: action.error.message,
          isUserRsgisteringOrLoggingInProgress: false
        }
      };
    }
    case USER_SIGNUP_FAILURE_ACTION: {
      return {
        ...state,
        user: {
          ...userInitialState, userSignUpSIgnInFailureMessage: 'Either username or email id exists',
          isUserRsgisteringOrLoggingInProgress: false
        }
      };
    }
    case USER_LOGOUT_ACTION: {
      localStorage.removeItem(APP_USER_TOKEN);
      return {
        ...state,
        user: { ...userInitialState }
      }
    }
    default:
      return state;
  }
}

export default applicationReducer;
