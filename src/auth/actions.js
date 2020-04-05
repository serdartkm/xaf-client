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
  return async function(dispatch, getState) {
    const { emailorusername, password } = getState().auth;
    dispatch({ type: actionTypes.LOGIN_STARTED });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_XAF_SERVER_URL}/auth/login?` +
          new URLSearchParams({ password, emailorusername }),
        {
          headers: {
            'Conten-Type': 'application/json',
            'Access-Control-Allow-Headers': '*'
          },
          method: 'GET'
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, token: result.token });
      } else if (response.status === 400) {
        const { errors } = result;

        errors.forEach(error => {
          dispatch(
            serverValidation({
              status: error
            })
          );
        });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      dispatch({ type: actionTypes.LOGIN_FAILED, payload: { error } });
    }
  };
}

export function signup() {
  return async function(dispatch, getState) {
    dispatch({ type: actionTypes.SIGNUP_STARTED });
    const { email, password, username } = getState().auth;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_XAF_SERVER_URL}/auth/signup?` +
          new URLSearchParams({ password, email, username }),
        {
          headers: {
            ContentType: 'application/json',
            Accept: 'application/json'
          }
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        dispatch({ type: actionTypes.SIGNUP_SUCCESS, token: result.token });
      } else if (response.status === 400) {
        const { errors } = result;
        errors.forEach(error => {
          dispatch(
            serverValidation({
              status: error
            })
          );
        });
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      dispatch({ type: actionTypes.SIGNUP_FAILED, payload: { error } });
    }
  };
}
export function signout({ token }) {
  return function(dispatch) {
    dispatch({ type: actionTypes.LOGOUT_STARTED });
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/auth/logout?` +
        new URLSearchParams({ token })
    )
      .then(() => {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: actionTypes.LOGOUT_FAILED, error });
      });
  };
}
export function changePassword() {
  return async function(dispatch, getState) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_STARTED });
    const { confirm, password } = getState().auth;
    try {
      const response = await fetch('/changepass', {
        method: 'put',
        body: JSON.stringify({ confirm, password })
      });
      const result = await response.json();
      if (response.status === 200) {
        dispatch({
          type: actionTypes.CHANGE_PASSWORD_SUCCESS,
          token: result.token
        });
      } else if (response.status === 400) {
        const { errors } = result;
        errors.forEach(error => {
          dispatch(
            serverValidation({
              status: error
            })
          );
        });
      } else {
        throw new Error('Changing password failed');
      }
    } catch (error) {
      dispatch({
        type: actionTypes.CHANGE_PASSWORD_FAILED,
        payload: { error }
      });
    }
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
        if (httpStatus.serverValidationRange({ status: response.status })) {
          dispatch(
            serverValidation({
              status: response.status
            })
          );
        } else if (response.status === 200) {
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

export function getEmailFromUrl({ email }) {
  return {
    type: actionTypes.GOT_EMAIL_FROM_URL,
    email
  };
}
