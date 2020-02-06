import actionTypes from './actionTypes';
export function createObject(objectName) {
  return (dispach, getState) => {
    const state = getState();
    const obj = state[objectName];
    return fetch(state.url, { method: 'post', body: JSON.stringify(obj) })
      .then(response => {
        response.json();
      })
      .then(json => {
        dispach({ type: actionTypes.CREATING_DATA_FULLFILLED, payload: json });
      })
      .catch(err => {
        dispach({ type: actionTypes.CREATING_DATA_FAILED, payload: err });
      });
  };
}

export function updateObject(dispach) {}

export function deleteObject(dispach) {}

export function findObject(dispach) {}
export function findCollection(dispach) {}
