import actionTypes from './actionTypes';
export function fetchList({ objectName, appName }) {
  debugger;
  let url =
    `${process.env.REACT_APP_XAF_SERVER_URL}/list?` +
    new URLSearchParams({
      document: objectName,
      appName
    });
  return function(dispatch) {
    dispatch({
      type: actionTypes.FETCH_LIST_STARTED,
      objectName
    });

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: actionTypes.FETCH_LIST_SUCCESS,
          data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_LIST_FAILED,
          error
        });
      });
  };
}
