import detailUiActionType from './detail-ui-actionTypes';

const initState = {
  fieldMetaData: []
};
export default function detailUiReducer(state = initState, action) {
  switch (action.type) {
    case detailUiActionType.CREATE_OBJECT_CLICKED:
      return { ...state, fieldMetaData: action.payload.fieldMetaData };

    default:
      return state;
  }
}
