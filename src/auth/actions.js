import actionTypes from './actionType';
import { serverValidation } from '../form/actions';
import httpStatus from '../form/http-status';
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
        if (httpStatus.serverValidationRange(status)) {
          dispatch(
            serverValidation({
              status: response.status
            })
          );
        } else if (status === 200) {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: response.json().token
          });
        } else {
          throw new Error('Login failed');
        }
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
      .then(response => {
        if (httpStatus.serverValidationRange(status)) {
          dispatch(
            serverValidation({
              status: response.status
            })
          );
        } else if (status === 200) {
          dispatch({
            type: actionTypes.SIGNUP_SUCCESS,
            payload: response.json().token
          });
        } else {
          throw new Error('SIGNUP failed');
        }
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
      .then(response => {
        if (httpStatus.serverValidationRange(status)) {
          dispatch(
            serverValidation({
              status: response.status
            })
          );
        } else if (status === 200) {
          dispatch({
            type: actionTypes.CHANGE_PASSWORD_SUCCESS,
            payload: response.json().token
          });
        } else {
          throw new Error('Changing password failed');
        }
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
      .then(response => {
        if (httpStatus.serverValidationRange(status)) {
          dispatch(
            serverValidation({
              status: response.status
            })
          );
        } else if (status === 200) {
          dispatch({
            type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS
          });
        } else {
          throw new Error('RequestChange password failed');
        }
      })
      .then(() => dispatch({ type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS }))
      .catch(err =>
        dispatch({
          type: actionTypes.REQUEST_PASS_CHANGE_FAILED,
          payload: { error: err }
        })
      );
  };
}
