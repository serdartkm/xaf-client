export default function asyncAction({
  objectName,
  operation,
  body = {},
  dispatch,
  pending,
  fulfilled,
  failed
}) {
  const action = { type: pending, payload: { objectName } };
  debugger;
  dispatch(action);
  return fetch(`http://localhost:8000/${operation}?document=${objectName}`, {
    method: 'post',
    body: JSON.stringify(body)
  })
    .then(response => {
      const json = response.json();
      debugger;
      return json;
    })
    .then(json => {
      const action = { type: fulfilled, payload: { objectName, result: json } };
      debugger;
      dispatch(action);
    })
    .catch(err => {
      const action = { type: failed, payload: { objectName, error: err } };
      debugger;
      dispatch(action);
    });
}
