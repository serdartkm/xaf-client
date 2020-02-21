import detailUiActionTypes from './detail-ui-actionTypes';
import detailActionTypes from '../detail-reducer/detailActionTypes';
import getFieldsMetaData from './getFieldsMetaData';
export function createObjectClicked({ objectName, metaData }) {
  const object = createObject({ objectName, metaData });
  const fieldMetaData = getFieldsMetaData({ objectName, metaData });

  return dispatch => {
    dispatch({
      type: detailActionTypes.CREATED_NEW_OBJECT,
      payload: object
    });
    return {
      type: detailUiActionTypes.CREATE_OBJECT_CLICKED,
      payload: fieldMetaData
    };
  };
}
