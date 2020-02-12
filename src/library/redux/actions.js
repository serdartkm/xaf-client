import actionTypes from './actionTypes';

export function createObject(objectName) {
  return (dispach, getState) => {
    const state = getState();
    const obj = state[objectName];

    dispach({ type: actionTypes.CREATING_DATA });

    return fetch(`http://localhost:8000/createdata?document=${objectName}`, {
      method: 'post',
      body: JSON.stringify(obj)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('json...', json);
        debugger;
        dispach({
          type: actionTypes.CREATING_DATA_FULLFILLED,
          payload: json
        });
      })
      .catch(err => {
        debugger;
        dispach({ type: actionTypes.CREATING_DATA_FAILED, payload: err });
      });
  };
}

export function updateObject(dispach) {}

export function deleteObject(dispach) {}

export function findObject(dispach) {}
export function findCollection(dispach) {}
export function findByParent({ objectName, parentName }) {}
export function changeValue({ objectName, propName, value }) {
  return dispach => {
    dispach({
      type: actionTypes.VALUE_CHANGED,
      payload: { objectName, propName, value }
    });
  };
}
