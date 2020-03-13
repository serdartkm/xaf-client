import actionTypes from './actionType';
export const initState = {
  email: '',
  password: '',
  success: false,
  error: null,
  username: '',
  loading: false,
  confirm: ''
};
export default function reducer(state = initState, action) {
  debugger;
  switch (action.type) {
    case actionTypes.VALUE_CHANGED:
      return { ...state, [action.payload.propName]: action.payload.value };
    case actionTypes.LOGIN_STARTED:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, success: true, loading: false };
    case actionTypes.LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.SIGNUP_STARTED:
      return { ...state, loading: true };
    case actionTypes.SIGNUP_SUCCESS:
      return { ...state, loading: false, success: true };
    case actionTypes.SIGNUP_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.CHANGE_PASSWORD_STARTED:
      return { ...state, loading: true };
    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return { ...state, success: true, loading: false };
    case actionTypes.CHANGE_PASSWORD_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.REQUEST_PASS_CHANGE_STARTED:
      return { ...state, loading: true };
    case actionTypes.REQUEST_PASS_CHANGE_SUCCESS:
      return { ...state, loading: false, success: true };
    case actionTypes.REQUEST_PASS_CHANGE_FAILED:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return null;
  }
}
