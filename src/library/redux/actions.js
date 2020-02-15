import actionTypes from './actionTypes';
import asyncAction from './asyncAction';

export function insertOne({ objectName, body }) {
  return dispatch => {
    return asyncAction({
      objectName,
      dispatch,
      operation: 'insertOne',
      body,
      pending: actionTypes.INSERTING_ONE,
      fulfilled: actionTypes.INSERTING_ONE_FULFILLED,
      failed: actionTypes.INSERTING_ONE_FAILED
    });
  };
}

export function find({ objectName, body }) {
  return dispatch => {
    return asyncAction({
      objectName,
      dispatch,
      operation: 'find',
      body,
      pending: actionTypes.FINDING,
      fulfilled: actionTypes.FINDING_FULFILLED,
      failed: actionTypes.FINDING_FAILED
    });
  };
}

export function findOne({ objectName, body }) {
  return dispatch => {
    return asyncAction({
      objectName,
      dispatch,
      operation: 'findOne',
      body,
      pending: actionTypes.FINDING_ONE,
      fulfilled: actionTypes.FINDING_ONE_FULFILLED,
      failed: actionTypes.FINDING_ONE_FAILED
    });
  };
}

export function updateOne({ objectName, body }) {
  return dispatch => {
    return asyncAction({
      objectName,
      dispatch,
      operation: 'updateOne',
      body,
      pending: actionTypes.UPDATING_ONE,
      fulfilled: actionTypes.UPDATING_ONE_FULFILLED,
      failed: actionTypes.UPDATING_ONE_FAILED
    });
  };
}

export function deleteOne({ objectName, body }) {
  return dispatch => {
    return asyncAction({
      objectName,
      dispatch,
      operation: 'deleteOne',
      body,
      pending: actionTypes.DELETING_ONE,
      fulfilled: actionTypes.DELETING_ONE_FULFILLED,
      failed: actionTypes.DELETING_ONE_FAILED
    });
  };
}

export function changeValue({ objectName, propName, value }) {
  return dispach => {
    dispach({
      type: actionTypes.VALUE_CHANGED,
      payload: { objectName, propName, value }
    });
  };
}

export function documentSelected({ objectName, doc }) {
  return dispach => {
    const action = {
      type: actionTypes.DOCUMENT_SELECTED,
      payload: { objectName, doc }
    };
    debugger;
    dispach(action);
  };
}

export function addNewDocument({ objectName }) {
  return dispatch => {
    const action = {
      type: actionTypes.ADD_NEW_DOCUMENT,
      payload: { objectName }
    };
    dispatch(action);
  };
}
