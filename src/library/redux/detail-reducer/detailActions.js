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
    payload: {object}
  };
}
