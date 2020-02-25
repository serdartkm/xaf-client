import detailUiActionTypes from './detail-ui-actionTypes';
import store from '../store';
import getFieldsMetaData from './getFieldsMetaData';
import createObject from './createObjectHelper';
export function createObjectClicked({ objectName }) {
  const { metaData } = store.getState().ui;
  const object = createObject({ objectName, metaData });
  const fieldMetaData = getFieldsMetaData({ objectName, metaData });
  return {
    type: detailUiActionTypes.CREATE_OBJECT_CLICKED,
    payload: { fieldMetaData, object }
  };
}
