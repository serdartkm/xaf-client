import validationState from './validationStates';
export function validateEmailConstraint({ email, propName }) {
  const emailRegex = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );
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
        message: 'email is not valid'
      }
    };
  }
}

export function validatePasswordConstraint({ password, propName }) {
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    'g'
  );

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
        message: `at least 8 characters, must contain at least 1 uppercase letter,  1 lowercase letter, Can contain special characters`
      }
    };
  }
}

export function validateUserNameConstraint({ username, propName }) {
  const usernameRegex = new RegExp(/[a-zA-Z]+[-_]*[a-zA-Z]+/g);

  if (usernameRegex.test(username)) {
    return {
      propName,
      payload: { validationState: validationState.VALID, message:'' }
    };
  } else {
    return {
      propName,
      payload: {
        validationState: validationState.INVALID,
        message: `Only Letters a-z or A-Z and the Symbols - and _ are allowed`
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
        message: 'empty string not allowed'
      }
    };
  } else {
    return {
      propName,
      payload: { validationState: validationState.VALID, message:'' }
    };
  }
}
