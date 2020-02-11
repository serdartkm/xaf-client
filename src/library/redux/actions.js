import actionTypes from './actionTypes';

export function createObject(objectName) {
  return (dispach, getState) => {
    const state = getState();
    const obj = state[objectName];
    dispach({ type: actionTypes.CREATING_DATA });
    debugger;
    return fetch(state.url, { method: 'post', body: JSON.stringify(obj) })
      .then(response => {
        response.json();
      })
      .then(json => {
        dispach({
          type: actionTypes.CREATING_DATA_FULLFILLED,
          payload: json
        });
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
export function findByParent({ objectName, parentName }) {}
export function changeValue({ objectName, propName, value }) {
  return dispach => {
    dispach({
      type: actionTypes.VALUE_CHANGED,
      payload: { objectName, propName, value }
    });
  };
}
