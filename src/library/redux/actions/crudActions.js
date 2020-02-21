// included into test
export function findAction({ pending, fulfilled, failed, dispatch, url }) {
  dispatch({ type: pending });

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(body => {
      const action = {
        type: fulfilled,
        payload: { result: body }
      };

      dispatch(action);
    })
    .catch(err => {
      const action = { type: failed, error: err };

      dispatch(action);
    });
}
