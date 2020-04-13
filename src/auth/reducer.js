import actionTypes from './actionType';
import authMessage from './authMessages';
export const initState = {
  email: '',
  password: '',
  success: false,
  error: null,
  username: '',
  loading: false,
  confirm: '',
  current: '',
  emailorusername: '',
  token: null,
  isLoggedIn: false,
  isPasswordChanged: false,
};
export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.VALUE_CHANGED:
      return { ...state, [action.payload.propName]: action.payload.value };
    case actionTypes.LOGIN_STARTED:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        token: action.token,
        isLoggedIn: true,
        password: '',
        successMessage: authMessage.LOGIN_SUCCESS_MESSAGE,
      };
    case actionTypes.LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.SIGNUP_STARTED:
      return { ...state, loading: true };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        isLoggedIn: true,
        token: action.token,
        password: '',
        successMessage: authMessage.SIGNUP_SUCCESS_MESSAGE,
      };
    case actionTypes.SIGNUP_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.CHANGE_PASSWORD_STARTED:
      return { ...state, loading: true };
    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        isPasswordChanged: true,
        successMessage: authMessage.PASSWORD_CHANGE_SUCCESS_MESSAGE,
      };
    case actionTypes.CHANGE_PASSWORD_FAILED:
      return { ...state, loading: false, error: action.error };
    case actionTypes.REQUEST_PASS_CHANGE_STARTED:
      return { ...state, loading: true };
    case actionTypes.REQUEST_PASS_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        successMessage: authMessage.FORGOT_PASSWORD_SUCCESS_MESSAGE,
      };
    case actionTypes.REQUEST_PASS_CHANGE_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.GOT_TOKEN_FROM_URL:
      return { ...state, token: action.token };
    default:
      return state;
  }
}
