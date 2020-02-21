import {findAction} from '../actions/crudActions';
import actionTypes from './listActionTypes';
export function findList({ objectName }) {

  return dispatch => {
    return findAction({
      dispatch,
      url: `http://localhost:8000/find?document=${objectName}`,
      pending: actionTypes.FINDING_LIST,
      fulfilled: actionTypes.FINDING_LIST_FULFILLED,
      failed: actionTypes.FINDING_LIST_FAILED
    });
  };
}
