import actionTypes from './actionType';
export function valueChanged({ propName, value }) {
  return {
    type: actionTypes.VALUE_CHANGED,
    payload: {
      propName,
      value
    }
  };
}

export function login() {
  return function(dispatch, getState) {
    const { email, password } = getState().auth;
    dispatch({ type: actionTypes.LOGIN_STARTED });
    return fetch(`/login`, {
      headers: { ContentType: 'application/json' },
      body: JSON.stringify({ password, email })
    })
      .then(response => {
        return response.json();
      })
      .then(() => {
        const action = {
          type: actionTypes.LOGIN_SUCCESS
        };

        dispatch(action);
      })
      .catch(err => {
        dispatch({ type: actionTypes.LOGIN_FAILED, payload: { error: err } });
      });
  };
}

export function signup() {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.SIGNUP_STARTED });
    const { email, password, username } = getState().auth;
    return fetch('/signup', {
      headers: { ContentType: 'application/json' },
      body: JSON.stringify({ email, password, username })
    })
      .then(response => response.json())
      .then(() => {
        dispatch({ type: actionTypes.SIGNUP_SUCCESS });
      })
      .catch(err =>
        dispatch({ type: actionTypes.SIGNUP_FAILED, payload: { error: err } })
      );
  };
}

export function changePassword() {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_STARTED });
    const { email, password } = getState().auth;

    return fetch('/changepass', {
      method: 'put',
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(() => {
        dispatch({ type: actionTypes.CHANGE_PASSWORD_SUCCESS });
      })
      .catch(err =>
        dispatch({
          type: actionTypes.CHANGE_PASSWORD_FAILED,
          payload: { error: err }
        })
      );
  };
}

export function requestPassChange() {
  return function(dispatch, getState) {
    const { email } = getState().auth;
    dispatch({ type: actionTypes.REQUEST_PASS_CHANGE_STARTED });
    return fetch('/requestpasschange', {
      method: 'post',
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(() => dispatch({ type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS }))
      .catch(err =>
        dispatch({
          type: actionTypes.REQUEST_PASS_CHANGE_FAILED,
          payload: { error: err }
        })
      );
  };
}

export function validateEmailConstraint({ email }) {
  const emailRegex = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );

  if (emailRegex.test(email)) {
    return {
      type: actionTypes.EMAIL_CONSTRAINT_VALID
    };
  } else {
    return {
      type: actionTypes.EMAIL_CONSTRAINT_NOT_VALID,
      payload: { message: 'email is not valid' }
    };
  }
}

export function validatePasswordConstraint({ password }) {
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    'g'
  );

  if (passwordRegex.test(password)) {
    return {
      type: actionTypes.PASSWORD_CONSTRAINT_VALID
    };
  }
  if (!passwordRegex.test(password)) {
    return {
      type: actionTypes.PASSWORD_CONSTRAINT_NOT_VALID,
      payload: {
        message: `at least 8 characters, must contain at least 1 uppercase letter,  1 lowercase letter, Can contain special characters`
      }
    };
  }
}

export function validateUserNameConstraint({ username }) {
  const usernameRegex = new RegExp(/[a-zA-Z]+[-_]*[a-zA-Z]+/g);

  if (usernameRegex.test(username)) {
    debugger;
    return { type: actionTypes.USERNAME_CONSTRAINT_VALID };
  } else {
    debugger;
    return {
      type: actionTypes.USERNAME_CONSTRAINT_NOT_VALID,
      payload: {
        message: `Only Letters a-z or A-Z and the Symbols - and _ are allowed`
      }
    };
  }
}

export function validateEmptyString({ propName, value }) {
  if (value.length === 0) {
    return {
      type: actionTypes.STRING_CONSTRAINT_NOT_VALID,
      payload: { propName, message: 'empty string not allowed' }
    };
  } else {
    return { type: actionTypes.STRING_CONSTRAINT_VALID, payload: { propName } };
  }
}
