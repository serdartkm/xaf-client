import actionTypes from './detailActionTypes';
import createObjectHelper from '../detail-ui-reducer/createObjectHelper';
import store from '../../redux/store';
export function valueChanged({ propName, value }) {
  return {
    type: actionTypes.VALUE_CHANGED,
    payload: { propName, value }
  };
}

export function createObject({ objectName }) {
  const { metaData } = store.getState().ui;
  debugger;
  const object = createObjectHelper({ objectName, metaData });
  return {
    type: actionTypes.CREATED_OBJECT,
    payload: { object }
  };
}

export function insertOne({ objectName, data }) {
  return (dispatch, getState) => {
    const detail = getState().detail;
    dispatch({ type: actionTypes.INSERTING_DOCUMENT });
    return fetch(`http://localhost:8000/insertOne?document=${objectName}`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        const action = {
          type: actionTypes.INSERTING_DOCUMENT_FULFILLED,
          payload: { data: { ...detail, _id: json._id } }
        };
        dispatch(action);
      })
      .catch(err => {
        dispatch({
          type: actionTypes.INSERTING_DOCUMENT_FAILED,
          payload: { error: err }
        });
      });
  };
}
