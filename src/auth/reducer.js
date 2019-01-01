import actionTypes from './actionType';
export const initState = {
  email: '',
  password: '',
  success: false,
  error: null,
  username: '',
  loading: false,
  confirm: '',
  validation: {
    email: { isValid: false, message: '' },
    password: { isValid: false, message: '' },
    username: { isValid: false, message: '' }
  }
};
export default function reducer(state = initState, action) {
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
    case actionTypes.EMAIL_CONSTRAINT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          email: { isValid: true, message: '' }
        }
      };
    case actionTypes.EMAIL_CONSTRAINT_NOT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          email: { isValid: false, message: action.payload.message }
        }
      };
    case actionTypes.PASSWORD_CONSTRAINT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          password: { isValid: true, message: '' }
        }
      };
    case actionTypes.PASSWORD_CONSTRAINT_NOT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          password: { isValid: false, message: action.payload.message }
        }
      };
    case actionTypes.USERNAME_CONSTRAINT_VALID:
      
      return {
        ...state,
        validation: {
          ...state.validation,
          username: { isValid: true, message: '' }
        }
      };
    case actionTypes.USERNAME_CONSTRAINT_NOT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          username: { isValid: false, message: action.payload.message }
        }
      };
    case actionTypes.STRING_CONSTRAINT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.payload.propName]: { isValid: true, message: '' }
        }
      };
    case actionTypes.STRING_CONSTRAINT_NOT_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.payload.propName]: {
            isValid: false,
            message: action.payload.message
          }
        }
      };
    case actionTypes.RESET_CONSTRAINT:
   
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.payload.propName]: { isValid: false, message: '' }
        }
      };
    default:
      return state;
  }
}
