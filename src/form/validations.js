import * as actionTypes from './actionTypes';
export function validateEmailConstraint({ email, propName }) {
  const emailRegex = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );
  if (emailRegex.test(email)) {
    return {
      type: actionTypes.VALID_CONSTRAINT,
      payload: {
        isValid: true,
        propName
      }
    };
  } else {
    return {
      type: actionTypes.NOT_VALID_CONSTRAINT,
      payload: {
        isValid: false,
        message: 'email is not valid',
        propName
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
      type: actionTypes.VALID_CONSTRAINT,
      payload: {
        isValid: true,
        propName
      }
    };
  }
  if (!passwordRegex.test(password)) {
    return {
      type: actionTypes.NOT_VALID_CONSTRAINT,
      payload: {
        propName,
        isValid: false,
        message: `at least 8 characters, must contain at least 1 uppercase letter,  1 lowercase letter, Can contain special characters`
      }
    };
  }
}

export function validateUserNameConstraint({ username, propName }) {
  const usernameRegex = new RegExp(/[a-zA-Z]+[-_]*[a-zA-Z]+/g);

  if (usernameRegex.test(username)) {
    return {
      type: actionTypes.VALID_CONSTRAINT,
      payload: { isValid: true, propName }
    };
  } else {
    return {
      type: actionTypes.NOT_VALID_CONSTRAINT,
      payload: {
        propName,
        isValid: false,
        message: `Only Letters a-z or A-Z and the Symbols - and _ are allowed`
      }
    };
  }
}

export function validateEmptyString({ value, propName }) {
  if (value.length === 0) {
    return {
      type: actionTypes.NOT_VALID_CONSTRAINT,
      payload: {
        propName,
        isValid: false,
        message: 'empty string not allowed'
      }
    };
  } else {
    return {
      type: actionTypes.VALID_CONSTRAINT,
      payload: { isValid: true, propName }
    };
  }
}
