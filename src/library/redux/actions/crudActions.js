// included into test
export function findAction({ pending, fulfilled, failed, dispatch, url }) {
  dispatch({ type: pending });
  return fetch(url)
    .then(response => response.json())
    .then(body => {
      const action = {
        type: fulfilled,
        payload: { result: body }
      };
      debugger;
      dispatch(action);
    })
    .catch(err => {
      const action = { type: failed, error: err };
      debugger;
      dispatch(action);
    });
}
