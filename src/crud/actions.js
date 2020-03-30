import actionTypes from './actionTypes';
import createObjectHalper from './createObjectHelper';
import getFieldsMetaData from './getFieldsMetaData';
import getPropNames from './getPropNames';
import store from '../store';

export function valueChanged({ propName, value }) {
  return { type: actionTypes.VALUE_CHANGED, payload: { propName, value } };
}

export function setMetaData({ metaData }) {
  return { type: actionTypes.META_DATA_IS_SET, metaData };
}

export function createObject() {
  const { metaData, objectName } = store.getState().crud;

  const obj = createObjectHalper({ objectName, metaData });
  const fields = getFieldsMetaData({ metaData, objectName });
  return { type: actionTypes.OBJECT_CREATED, payload: { obj, fields } };
}

export function selectObject({ obj }) {
  const { metaData, objectName } = store.getState().crud;
  const fields = getFieldsMetaData({ metaData, objectName });
  return { type: actionTypes.OBJECT_SELECTED, payload: { obj, fields } };
}

export function find({ objectName, metaData, filter, listView }) {
  const propNames = getPropNames({ objectName, metaData });
  let url;
  return function(dispatch) {
    dispatch({
      type: actionTypes.FINDING_STARTED,
      payload: { propNames, objectName, metaData }
    });
    if (!filter) {
      url =
        `${process.env.REACT_APP_XAF_SERVER_URL}/find?` +
        new URLSearchParams({
          document: objectName,
          metaData,
          listView
        });
    } else {
      url =
        `${process.env.REACT_APP_XAF_SERVER_URL}/find?` +
        new URLSearchParams({
          document: objectName,
          filter,
          metaData,
          listView
        });
    }
    return fetch(url)
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
      .then(response => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error('Something went wrong on api server! for insertOne ');
        }
      })
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
      .then(response => {
        if (response.status === 204) {
          dispatch({ type: actionTypes.UPDATE_ONE_SUCCESS });
        } else if (response.status === 304) {
          throw new Error('could not find object for updateOne ');
        } else {
          throw new Error('Something went wrong on api server! for updateOne ');
        }
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
      .then(response => {
        if (response.status === 202) {
          dispatch({ type: actionTypes.DELETE_ONE_SUCCESS });
        } else {
          throw new Error('Something went wrong on api server! for deleteOne ');
        }
      })
      .catch(err =>
        dispatch({
          type: actionTypes.DELETE_ONE_FAILED,
          payload: { error: err }
        })
      );
  };
}

export function initDatalist({ datalist }) {
  return function(dispatch) {
    dispatch({ type: actionTypes.DATALIST_STARTED });
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/find?document=${datalist}`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: actionTypes.DATALIST_SUCCESS,
          payload: { propName: datalist, data }
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.DATALIST_FAILED,
          payload: { error: err }
        });
      });
  };
}
