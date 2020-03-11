import actionTypes from './actionTypes';
import createObjectHalper from './createObjectHelper';
import getFieldsMetaData from './getFieldsMetaData';
import getPropNames from './getPropNames';
export function valueChanged({ propName, value, dispatch }) {
  dispatch({ type: actionTypes.VALUE_CHANGED, payload: { propName, value } });
}

export function createObject({ objectName, dispatch, metaData }) {
 
  const obj = createObjectHalper({ objectName, metaData });
  const fields = getFieldsMetaData({ metaData, objectName });
  dispatch({ type: actionTypes.OBJECT_CREATED, payload: { obj, fields } });
}

export function selectObject({ objectName, dispatch, metaData, obj }) {
  const fields = getFieldsMetaData({ metaData, objectName });
  dispatch({ type: actionTypes.OBJECT_SELECTED, payload: { obj, fields } });
}

export function find({ objectName, dispatch, metaData }) {
  const propNames = getPropNames({ objectName, metaData });
  dispatch({ type: actionTypes.FINDING_STARTED, payload: { propNames } });
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
}

export function insertOne({ objectName, dispatch, object }) {
  dispatch({ type: actionTypes.INSERT_ONE_STARTED });
  return fetch(
    `${process.env.REACT_APP_XAF_SERVER_URL}/insertOne?document=${objectName}`,
    { method: 'POST', body: JSON.stringify(object) }
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
}

export function updateOne({ objectName, dispatch, object }) {
  dispatch({ type: actionTypes.UPDATE_ONE_STARTED });

  return fetch(
    `${process.env.REACT_APP_XAF_SERVER_URL}/updateOne?document=${objectName}`,
    { method: 'put', body: JSON.stringify(object) }
  )
    .then(response => response.json())
    .then(() => {
      dispatch({ type: actionTypes.UPDATE_ONE_SUCCESS, payload: { object } });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.UPDATE_ONE_FAILED,
        payload: { error: err }
      });
    });
}

export function deleteOne({ objectName, dispatch, _id }) {
  dispatch({ type: actionTypes.DELETE_ONE_STARTED });
  return fetch(
    `${process.env.REACT_APP_XAF_SERVER_URL}/deleteOne?document=${objectName}`,
    { method: 'delete', body: JSON.stringify({ _id }) }
  )
    .then(response => response.json())
    .then(() =>
      dispatch({ type: actionTypes.DELETE_ONE_SUCCESS, payload: { _id } })
    )
    .catch(err =>
      dispatch({ type: actionTypes.DELETE_ONE_FAILED, payload: { error: err } })
    );
}
