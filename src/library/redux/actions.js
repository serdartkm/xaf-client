import actionTypes from './actionTypes';
import asyncAction from './asyncAction';

export function find({ body }) {
  return (dispatch, getState) => {
    const objectName = getState.objectName;
    debugger;
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

export function findOne({ body }) {
  return (dispatch, getState) => {
    const objectName = getState.objectName;
    debugger;
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

export function deleteOne({ body }) {
  return (dispatch, getState) => {
    const objectName = getState.objectName;
    debugger;
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

export function documentSelected({ doc }) {
  return dispach => {
    const action = {
      type: actionTypes.DOCUMENT_SELECTED,
      payload: { doc }
    };
    debugger;
    dispach(action);
  };
}

export function addNewDocument() {
  return dispatch => {
    const action = {
      type: actionTypes.ADD_NEW_DOCUMENT
    };
    dispatch(action);
  };
}

export function selectedObjectName({ objectName, propNames,propMetas }) {
  return dispatch => {
    const action = {
      type: actionTypes.SELECTED_OBJECT_NAME,
      payload: { objectName, propNames,propMetas }
    };
    dispatch(action);
  };
}
