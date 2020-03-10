import { useReducer } from 'react';
import detailReducer from './detailReducer';
import asyncAction from './asyncAction';
import actionTypes from './actionTypes';
import { useDispatch, useSelector } from 'react-redux';

function useDetailState() {
  const reduxState = useSelector(state => state);

  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(detailReducer, reduxState.currentObject);

  function valueChanged({ value, propName }) {
    dispatch({ type: actionTypes.VALUE_CHANGED, payload: { value, propName } });
  }

  function handleSave() {
    if (state && state._id) {
      debugger;
      updateOne();
    } else {
      debugger;
      insertOne();
    }
  }

  function insertOne() {
    asyncAction({
      objectName: reduxState.objectName,
      operation: 'insertOne',
      body: state,
      pending: actionTypes.INSERTING_ONE,
      fulfilled: actionTypes.INSERTING_ONE_FULFILLED,
      failed: actionTypes.INSERTING_ONE_FAILED,
      reduxDispatch: reduxDispatch,
      reactDispatch: dispatch
    });
  }
  function updateOne() {
    asyncAction({
      objectName: reduxState.objectName,
      operation: 'updateOne',
      body: state,
      pending: actionTypes.UPDATING_ONE,
      fulfilled: actionTypes.UPDATING_ONE_FULFILLED,
      failed: actionTypes.UPDATING_ONE_FAILED,
      reduxDispatch: reduxDispatch,
      reactDispatch: dispatch
    });
  }
  function deleteOne() {
    asyncAction({
      objectName: reduxState.objectName,
      operation: 'deleteOne',
      body: state,
      pending: actionTypes.DELETING_ONE,
      fulfilled: actionTypes.DELETING_ONE_FULFILLED,
      failed: actionTypes.DELETING_ONE_FAILED,
      reduxDispatch: reduxDispatch,
      reactDispatch: dispatch
    });
  }
  return { valueChanged, state, handleSave, deleteOne };
}

export default useDetailState;
