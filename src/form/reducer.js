import actionTypes from './actionTypes';
import validationState from './validationStates';
export default function reducer(state = {}, action) {
  let nextState = null;
  switch (action.type) {
    case actionTypes.INPUT_BLURRED:
      nextState = {
        ...state,
        validation: {
          ...state.validation,
          [action.propName]: action.payload
        }
      };
      debugger;

      return nextState;
    case actionTypes.INIT_VALIDATION_STATE:
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.propName]: {
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
          [action.propName]: {
            validationState: validationState.INACTIVE,
            message: ''
          }
        }
      };

    default:
      return state;
  }
}
