import detailUiActionTypes from './detail-ui-actionTypes';
import getFieldsMetaData from './getFieldsMetaData';
import createObject from './createObjectHelper';
export function createObjectClicked({ objectName }) {
  const { metaData } =window.store.getState().ui;
  debugger
  const object = createObject({ objectName, metaData });
  const fieldMetaData = getFieldsMetaData({ objectName, metaData });
  return {
    type: detailUiActionTypes.CREATE_OBJECT_CLICKED,
    payload: { fieldMetaData, object }
  };
}
