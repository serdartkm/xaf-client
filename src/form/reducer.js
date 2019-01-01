import actionTypes from './actionTypes';

export const initState = {
  validation: {
    email: { isValid: false, message: '' },
    password: { isValid: false, message: '' },
    username: { isValid: false, message: '' }
  }
};

export default function reducer(state, action) {
  switch (action.type) {
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
