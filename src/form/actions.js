import * as validations from './validations';
import validationTypes from './validationTypes';
import actionTypes from './actionTypes';

export function validateInput({ propName, validationType, value }) {
  let validation = null;
  switch (validationType) {
    case validationTypes.EMAIL:
      validation = validations.validateEmailConstraint({
        propName,
        email: value
      });
      break;
    case validationTypes.PASSWORD:
      validation = validations.validatePasswordConstraint({
        password: value,
        propName
      });
      break;
      case validationTypes.USERNAME:
        validation = validations.validateUserNameConstraint({
          username: value,
          propName
        });
        break;
    case validationTypes.EMPTY_STRING:
      validation = validations.validateEmptyString({ value, propName });
      break;
    default:
      validation = validations.validateEmptyString({ value, propName });
  }

  return { type: actionTypes.INPUT_BLURRED, ...validation };
}

export function initValidationState({ propName }) {
  debugger;
  return { type: actionTypes.INIT_VALIDATION_STATE, propName };
}

export function inputFocused({ propName }) {
  return { type: actionTypes.INPUT_FOCUSED, propName };
}
