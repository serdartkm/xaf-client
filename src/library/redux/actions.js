import actionTypes from './actionTypes';
import asyncAction from './asyncAction';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

// included into test
export function find() {
  return (dispatch, getState) => {
    const objectName = getState().objectName;
    dispatch({ type: actionTypes.FINDING });
    return fetch(`http://localhost:8000/find?document=${objectName}`)
      .then(response => response.json())
      .then(body => {
        const action = {
          type: actionTypes.FINDING_FULFILLED,
          payload: { result: body }
        };

        dispatch(action);
      })
      .catch(err => {
        const action = { type: actionTypes.FINDING_FAILED, error: err };
        dispatch(action);
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

//tested
export function selectedObjectName({ objectName, propNames, propMetas }) {
  return {
    type: actionTypes.SELECTED_OBJECT_NAME,
    payload: { objectName, propNames, propMetas }
  };
}
