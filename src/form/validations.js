import validationState from './validationStates';
import validationMessages from './validationMessages';
import { emailRegex, usernameRegex, passwordRegex } from './validationRegex';
export function validateEmailConstraint({ email, propName }) {
  if (emailRegex.test(email)) {
    return {
      propName,
      payload: {
        validationState: validationState.VALID,
        message: ''
      }
    };
  } else {
    return {
      propName,
      payload: {
        validationState: validationState.INVALID,
        message: validationMessages.INVALID_EMAIL
      }
    };
  }
}

export function validatePasswordConstraint({ password, propName }) {
  if (passwordRegex.test(password)) {
    return {
      propName,
      payload: {
        validationState: validationState.VALID,
        message: ''
      }
    };
  }
  if (!passwordRegex.test(password)) {
    return {
      propName,
      payload: {
        validationState: validationState.INVALID,
        message: validationMessages.INVALID_PASSWORD
      }
    };
  }
}

export function validateUserNameConstraint({ username, propName }) {
  if (usernameRegex.test(username)) {
    return {
      propName,
      payload: { validationState: validationState.VALID, message: '' }
    };
  } else {
    return {
      propName,
      payload: {
        validationState: validationState.INVALID,
        message: validationMessages.INVALID_USERNAME
      }
    };
  }
}

export function validateEmailOrUsername({ value, propName }) {
  if (emailRegex.test(value) || usernameRegex.test(value)) {
    return {
      propName,
      payload: {
        validationState: validationState.VALID,
        message: ''
      }
    };
  } else {
    return {
      propName,
      payload: {
        validationState: validationState.INVALID,
        message: validationMessages.INVALID_USERNAME_OR_PASSWORD
      }
    };
  }
}

export function validateEmptyString({ value, propName }) {
  if (value.length === 0) {
    return {
      propName,
      payload: {
        validationState: validationState.INVALID,
        message: validationMessages.INVALID_EMPTY_STRING
      }
    };
  } else {
    return {
      propName,
      payload: { validationState: validationState.VALID, message: '' }
    };
  }
}
