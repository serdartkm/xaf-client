import * as validations from './validations';
import validationTypes from './validationTypes';
import validationStates from './validationStates';
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
  return { type: actionTypes.INIT_VALIDATION_STATE, propName };
}
export function initFormValidationState() {
  return { type: actionTypes.INIT_FORM_VALIDATION_STATE };
}
export function inputFocused({ propName }) {
  return { type: actionTypes.INPUT_FOCUSED, propName };
}

export function validatePasswordMatch({
  passwordValue,
  confirmValue,
  propName
}) {
  if (passwordValue !== confirmValue) {
    return {
      type: actionTypes.INPUT_BLURRED,
      propName,
      payload: {
        validationState: validationStates.INVALID,
        message: 'password do not match'
      }
    };
  } else {
    return {
      type: actionTypes.INPUT_BLURRED,
      propName,
      payload: { validationState: validationStates.VALID, message: '' }
    };
  }
}
