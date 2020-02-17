export default function asyncAction({
  objectName,
  operation,
  body = {},
  reduxDispatch,
  reactDispatch,
  pending,
  fulfilled,
  failed
}) {
  const action = { type: pending, payload: { objectName } };
  debugger;
  reactDispatch(action);
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
      reduxDispatch(action);
    })
    .catch(err => {
      const action = { type: failed, payload: { objectName, error: err } };
      debugger;
      reactDispatch(action);
    });
}
