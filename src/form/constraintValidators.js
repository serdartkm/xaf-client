import validationState from './validationStates';
import validationTypes from './validationTypes';
import validationMessages from './validationMessages';
import { emailRegex, usernameRegex, passwordRegex } from './validationRegex';
export function validateEmailConstraint({ email }) {
  if (emailRegex.test(email)) {
    return {
      validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
      validationState: validationState.VALID,
      message: ''
    };
  } else {
    return {
      validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
      validationState: validationState.INVALID,
      message: validationMessages.INVALID_EMAIL
    };
  }
}
export function isClientValidationType({ validationType }) {
  switch (validationType) {
    case validationTypes.PASSWORD_FORMAT_VALIDATION:
      return true;
    case validationTypes.EMAIL_FORMAT_VALIDATION:
      return true;
    case validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION:
      return true;
    case validationTypes.EMPTY_STRING_VALIDATION:
      return true;
    case validationTypes.PASSWORDS_MATCH_VALIDATION:
      return true;
    case validationTypes.USERNAME_FORMAT_VALIDATION:
      return true;
    default:
      return false;
  }
}
export function validatePasswordConstraint({ password }) {
  if (passwordRegex.test(password)) {
    debugger;
    return {
      validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
      validationState: validationState.VALID,
      message: ''
    };
  }
  if (!passwordRegex.test(password)) {
    debugger;
    return {
      validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
      validationState: validationState.INVALID,
      message: validationMessages.INVALID_PASSWORD
    };
  }
}

export function validateUserNameConstraint({ username }) {
  if (usernameRegex.test(username)) {
    return {
      validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
      validationState: validationState.VALID,
      message: ''
    };
  } else {
    return {
      validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
      validationState: validationState.INVALID,
      message: validationMessages.INVALID_USERNAME
    };
  }
}

export function validateEmailOrUsername({ value }) {
  if (emailRegex.test(value) || usernameRegex.test(value)) {
    return {
      validationType: validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION,
      validationState: validationState.VALID,
      message: ''
    };
  } else {
    return {
      validationType: validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION,
      validationState: validationState.INVALID,
      message: validationMessages.INVALID_USERNAME_OR_PASSWORD
    };
  }
}

export function validateEmptyString({ value }) {
  if (value.length === 0) {
    debugger;
    return {
      validationType: validationTypes.EMPTY_STRING_VALIDATION,
      validationState: validationState.INVALID,
      message: validationMessages.INVALID_EMPTY_STRING
    };
  } else {
    debugger;
    return {
      validationType: validationTypes.EMPTY_STRING_VALIDATION,
      validationState: validationState.VALID,
      message: ''
    };
  }
}

export function validatePasswordMatch({ state }) {
  const { password, confirm } = state.auth;
  debugger;
  if (password !=="" && password !== confirm) {
    return {
      validationState: validationState.INVALID,
      message: validationMessages.PASSWORDS_DO_NOT_MATCH,
      validationType: validationTypes.PASSWORDS_MATCH_VALIDATION
    };
  } else {
    return {
      validationState: validationState.VALID,
      message: '',
      validationType: validationTypes.PASSWORDS_MATCH_VALIDATION
    };
  }
}
