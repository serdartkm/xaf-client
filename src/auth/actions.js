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
