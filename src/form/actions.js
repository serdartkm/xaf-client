import * as validations from './validations';
import validationTypes, { serverValidationType } from './validationTypes';
import validationStates from './validationStates';
import actionTypes from './actionTypes';
import httpStatus from './http-status';
import validationMessages from './validationMessages';
export function validateInput({ propName, validationType, value }) {
  let validation = null;
  switch (validationType) {
    case validationTypes.EMAIL:
      validation = validations.validateEmailConstraint({
        propName,
        email: value
      });
      break;
    case validationTypes.EMAIL_OR_USERNAME:
      validation = validations.validateEmailOrUsername({
        propName,
        value
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

export function initFormValidationState() {
  return { type: actionTypes.INIT_FORM_VALIDATION_STATE };
}

export function resetInputValidationState({ propName }) {
  return { type: actionTypes.RESET_VALIDATION_STATE, propName };
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
        message: validationMessages.PASSWORDS_DO_NOT_MATCH
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

export function serverValidation({ status }) {
  switch (status) {
    case httpStatus.credentialInvalid:
      return {
        type: actionTypes.SERVER_VALIDATION,
        serverValidationType: serverValidationType.INVALID_CREDENTIALS,
        message: validationMessages.INVALID_CREDENTIALS,
        validationState:validationStates.INVALID
      };
    case httpStatus.emailInvalid:
      return {
        type: actionTypes.SERVER_VALIDATION,
        serverValidationType: serverValidationType.INVALID_EMAIL,
        message: validationMessages.INVALID_EMAIL,
        validationState:validationStates.INVALID
      };
    case httpStatus.passwordInvalid:
      return {
        type: actionTypes.SERVER_VALIDATION,
        serverValidationType: serverValidationType.INVALID_PASSWORD,
        message: validationMessages.INVALID_PASSWORD,
        validationState:validationStates.INVALID
      };
    case httpStatus.usernameInvalid:
      return {
        type: actionTypes.SERVER_VALIDATION,
        serverValidationType: serverValidationType.INVALID_USERNAME,
        message: validationMessages.INVALID_USERNAME,
        validationState:validationStates.INVALID
      };
    case httpStatus.emailIsRegistered:
      return {
        type: actionTypes.SERVER_VALIDATION,
        serverValidationType: serverValidationType.REGISTERED_EMAIL,
        message: validationMessages.REGISTERED_EMAIL,
        validationState:validationStates.INVALID
      };
      case httpStatus.emailIsNotRegistered:
        return {
          type: actionTypes.SERVER_VALIDATION,
          serverValidationType: serverValidationType.EMAIL_NOT_REGISTERED,
          message: validationMessages.EMAIL_NOT_REGISTERED,
          validationState:validationStates.INVALID
        };
    case httpStatus.usernameIsTaken:
      return {
        type: actionTypes.SERVER_VALIDATION,
        serverValidationType: serverValidationType.USERNAME_TAKEN,
        message: validationMessages.USERNAME_TAKEN,
        validationState:validationStates.INVALID
      };
      case httpStatus.emptyStringNotValid:
        return {
          type: actionTypes.SERVER_VALIDATION,
          serverValidationType: serverValidationType.INVALID_EMPTY_STRING,
          message: validationMessages.INVALID_EMPTY_STRING,
          validationState:validationStates.INVALID
        };
    default:
      null;
  }
}
