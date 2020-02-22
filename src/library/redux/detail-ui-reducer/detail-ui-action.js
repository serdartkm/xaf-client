import detailUiActionTypes from './detail-ui-actionTypes';
import getFieldsMetaData from './getFieldsMetaData';
import createObject from './createObject';
export function createObjectClicked({ objectName, metaData }) {
  const object = createObject({ objectName, metaData });
  const fieldMetaData = getFieldsMetaData({ objectName, metaData });
  return {
    type: detailUiActionTypes.CREATE_OBJECT_CLICKED,
    payload: { fieldMetaData, object }
  };
}
