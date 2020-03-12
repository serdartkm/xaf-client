import actionTypes from './actionTypes';
import createObjectHalper from './createObjectHelper';
import getFieldsMetaData from './getFieldsMetaData';
import getPropNames from './getPropNames';
import store from '../store';
export function valueChanged({ propName, value }) {
  return { type: actionTypes.VALUE_CHANGED, payload: { propName, value } };
}

export function createObject() {
  const { metaData, objectName } = store.getState().crud;
  debugger;
  const obj = createObjectHalper({ objectName, metaData });
  const fields = getFieldsMetaData({ metaData, objectName });
  return { type: actionTypes.OBJECT_CREATED, payload: { obj, fields } };
}

export function selectObject({ obj }) {
  const { metaData, objectName } = store.getState().crud;
  const fields = getFieldsMetaData({ metaData, objectName });
  return { type: actionTypes.OBJECT_SELECTED, payload: { obj, fields } };
}

export function find({ objectName, metaData }) {
  debugger;
  const propNames = getPropNames({ objectName, metaData });
  return function(dispatch) {
    dispatch({
      type: actionTypes.FINDING_STARTED,
      payload: { propNames, objectName, metaData }
    });
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/find?document=${objectName}`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: actionTypes.FINDING_SUCCESS,
          payload: { data }
        });
      })
      .catch(err => {
        dispatch({ type: actionTypes.FINDING_FAILED, payload: { error: err } });
      });
  };
}

export function insertOne() {
  return function(dispatch, getState) {
    const { obj, objectName } = getState().crud;
    dispatch({ type: actionTypes.INSERT_ONE_STARTED });
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/insertOne?document=${objectName}`,
      { method: 'POST', body: JSON.stringify(obj) }
    )
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: actionTypes.INSERT_ONE_SUCCESS,
          payload: { _id: json._id }
        })
      )
      .catch(err => {
        dispatch({
          type: actionTypes.INSERT_ONE_FAILED,
          payload: { error: err }
        });
      });
  };
}

export function updateOne() {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.UPDATE_ONE_STARTED });
    const { obj, objectName } = getState().crud;
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/updateOne?document=${objectName}`,
      { method: 'put', body: JSON.stringify(obj) }
    )
      .then(response => response.json())
      .then(() => {
        dispatch({ type: actionTypes.UPDATE_ONE_SUCCESS });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.UPDATE_ONE_FAILED,
          payload: { error: err }
        });
      });
  };
}

export function deleteOne() {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.DELETE_ONE_STARTED });
    const { obj, objectName } = getState().crud;
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/deleteOne?document=${objectName}`,
      { method: 'delete', body: JSON.stringify({ _id: obj._id }) }
    )
      .then(response => response.json())
      .then(() => dispatch({ type: actionTypes.DELETE_ONE_SUCCESS }))
      .catch(err =>
        dispatch({
          type: actionTypes.DELETE_ONE_FAILED,
          payload: { error: err }
        })
      );
  };
}
