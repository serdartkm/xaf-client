import actionTypes from './actionType';
import { serverValidation } from '../form/actions';
import httpStatus from '../form/http-status';
export function valueChanged({ propName, value }) {
  return {
    type: actionTypes.VALUE_CHANGED,
    payload: {
      propName,
      value,
    },
  };
}

export function login() {
  return async function (dispatch, getState) {
    const { emailorusername, password } = getState().auth;
    dispatch({ type: actionTypes.LOGIN_STARTED });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_XAF_SERVER_URL}/auth/login`,
        {
          headers: {
            'Conten-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            Authorization: 'Basic ' + btoa(`${emailorusername}:${password}`),
          },
          method: 'GET',
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, token: result.token });
      } else if (response.status === 400) {
        const { errors } = result;

        errors.forEach((error) => {
          dispatch(
            serverValidation({
              status: error,
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
  return async function (dispatch, getState) {
    dispatch({ type: actionTypes.SIGNUP_STARTED });
    const { email, password, username } = getState().auth;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_XAF_SERVER_URL}/auth/signup`,
        {
          body: JSON.stringify({ password, email, username }),
          headers: {
            ContentType: 'application/json',
            Accept: 'application/json',
          },
          method: 'POST',
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        dispatch({ type: actionTypes.SIGNUP_SUCCESS, token: result.token });
      } else if (response.status === 400) {
        const { errors } = result;
        errors.forEach((error) => {
          dispatch(
            serverValidation({
              status: error,
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
  return function (dispatch) {
    dispatch({ type: actionTypes.LOGOUT_STARTED });
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/auth/logout?` +
        new URLSearchParams({ token })
    )
      .then(() => {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.LOGOUT_FAILED, error });
      });
  };
}
export function changePassword() {
  debugger;
  return async function (dispatch, getState) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_STARTED });
    const {
      confirm,
      password,
      token,
      emailorusername,
      current,
    } = getState().auth;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_XAF_SERVER_URL}/auth/changepass`,
        {
          method: 'put',
          body: JSON.stringify({
            confirm,
            password,
            current,
            token,
            emailorusername,
          }),
        }
      );

      const result = await response.json();
      if (response.status === 200) {
        dispatch({
          type: actionTypes.CHANGE_PASSWORD_SUCCESS,
          token: result.token,
        });
      } else if (response.status === 400) {
        const { errors } = result;
        errors.forEach((error) => {
          dispatch(
            serverValidation({
              status: error,
            })
          );
        });
      } else if (response.status === 500) {
        const { error } = result;

        dispatch({
          type: actionTypes.CHANGE_PASSWORD_FAILED,
          error: error,
        });
      } else {
        throw new Error('Changing password failed');
      }
    } catch (error) {
      dispatch({
        type: actionTypes.CHANGE_PASSWORD_FAILED,
        payload: { error },
      });
    }
  };
}

export function requestPassChange() {
  debugger;
  return async function (dispatch, getState) {
    try {
      dispatch({ type: actionTypes.REQUEST_PASS_CHANGE_STARTED });
      const { email } = getState().auth;
      const response = await fetch(
        `${process.env.REACT_APP_XAF_SERVER_URL}/auth/requestpasschange`,
        {
          method: 'post',
          body: JSON.stringify({ email }),
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        debugger;
        dispatch({
          type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS,
        });
      } else if (response.status === 400) {
        const { errors } = result;
        errors.forEach((error) => {
          dispatch(
            serverValidation({
              status: error,
            })
          );
        });
      } else if (response.status === 500) {
        const { error } = result;
        debugger;
        dispatch({
          type: actionTypes.REQUEST_PASS_CHANGE_FAILED,
          error: error,
        });
      } else {
        throw new Error('Changing password failed');
      }
    } catch (error) {
      debugger;
      dispatch({
        type: actionTypes.REQUEST_PASS_CHANGE_FAILED,
        payload: { error },
      });
    }
  };
}

export function getTokenFromUrl({ token }) {
  return {
    type: actionTypes.GOT_TOKEN_FROM_URL,
    token,
  };
}

export function setToken({ token }) {
  return { type: actionTypes.SET_TOKEN, token };
}

export function logoutAction() {
  return { type: actionTypes.LOG_OUT };
}
