import actionTypes from './actionTypes';
export function fetchNavigations({ appName }) {
  let url =
    `${process.env.REACT_APP_XAF_SERVER_URL}/navigations?` +
    new URLSearchParams({ appName });
  return function(dispatch) {
    dispatch({
      type: actionTypes.FETCH_NAVIGATIONS_STARTED
    });
    return fetch(url)
      .then(response => response.json())
      .then(data => {
  
        dispatch({
          type: actionTypes.FETCH_NAVIGATIONS_SUCCESS,
          data, appName
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_NAVIGATIONS_FAILED,
          error,
          appName
        });
      });
  };
}
