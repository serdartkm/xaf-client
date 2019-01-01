import actionTypes from './actionTypes';
import validationState from './validationStates';

export default function reducer(state = { validation: {} }, action) {
  let nextState = null;
  switch (action.type) {
    case actionTypes.SERVER_VALIDATION:
    case actionTypes.CLIENT_VALIDATION:
      nextState = {
        ...state,
        validation: {
          ...state.validation,

          [action.validationType]: {
            validationState: action.validationState,
            message: action.message
          }
        }
      };

      return nextState;

    case actionTypes.RESET_VALIDATION_STATE:
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.validationType]: {
            validationState: validationState.INACTIVE,
            message: ''
          }
        }
      };

    case actionTypes.INPUT_FOCUSED:
      return {
        ...state,
        validation: {
          ...state.validation,
          formState: validationState.INACTIVE,
          [action.propName]: {
            validationState: validationState.INACTIVE,
            message: ''
          }
        }
      };
    case actionTypes.INIT_FORM_VALIDATION_STATE:
      return {
        ...state,
        validation: {
          ...state.validation,
          formState: validationState.INACTIVE
        }
      };

    default:
      return state;
  }
}
