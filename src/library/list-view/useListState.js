import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listReducer from './listReducer';
import asyncAction from './asyncAction';
import actionTypes from './actionTypes';
export default function useListState() {
  const reduxState = useSelector(state => state);

  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(listReducer, reduxState.list);

  function find() {
    asyncAction({
      objectName: reduxState.objectName,
      pending: actionTypes.FINDING,
      failed: actionTypes.FINDING_FAILED,
      fulfilled: actionTypes.FINDING_FULFILLED,
      operation: 'find',
      reactDispatch: dispatch,
      reduxDispatch,
      body: {}
    });
  }

  function selectDocument() {}

  return { find, objectName: reduxState.objectName, reduxState, state };
}
