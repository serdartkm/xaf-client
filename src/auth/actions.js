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

export function login({ email, password, dispatch }) {
  dispatch({ type: actionTypes.LOGIN_STARTED });
  return fetch(`/login`, {
    headers: { ContentType: 'application/json' },
    body: JSON.stringify({ password, email })
  })
    .then(response => {
      return response.json();
      
    })
    .then(json => {
      const action = {
        type: actionTypes.LOGIN_SUCCESS
      };
     
        dispatch(action);
    })
    .catch(err => {
  
      dispatch({ type: actionTypes.LOGIN_FAILED, payload: { error: err } });
    });
}

export function signup({ username, email, password, dispatch }) {
  dispatch({ type: actionTypes.SIGNUP_STARTED });
  return fetch('/signup', {
    headers: { ContentType: 'application/json' },
    body: JSON.stringify({ email, password, username })
  })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: actionTypes.SIGNUP_SUCCESS });
    })
    .catch(err =>
      dispatch({ type: actionTypes.SIGNUP_FAILED, payload: { error: err } })
    );
}

export function changePassword({ password, email, dispatch }) {
  dispatch({ type: actionTypes.CHANGE_PASSWORD_STARTED });
  return fetch('/changepass', {
    method: 'put',
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: actionTypes.CHANGE_PASSWORD_SUCCESS });
    })
    .catch(err =>
      dispatch({
        type: actionTypes.CHANGE_PASSWORD_FAILED,
        payload: { error: err }
      })
    );
}

export function requestPassChange({ email, dispatch }) {
  dispatch({ type: actionTypes.REQUEST_PASS_CHANGE_STARTED });
 return fetch('/requestpasschange', {
    method: 'post',
    body: JSON.stringify({ email })
  })
    .then(response => response.json())
    .then(json => dispatch({ type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS }))
    .catch(err =>
      dispatch({
        type: actionTypes.REQUEST_PASS_CHANGE_FAILED,
        payload: { error: err }
      })
    );
}
