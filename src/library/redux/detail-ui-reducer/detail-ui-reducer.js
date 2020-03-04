import detailUiActionType from './detail-ui-actionTypes';

const initState = {
  fieldMetaData: []
};
export default function detailUiReducer(state = initState, action) {
  let nextState=null
  switch (action.type) {
    case detailUiActionType.CREATE_OBJECT_CLICKED:
      nextState ={ ...state, fieldMetaData: action.payload.fieldMetaData };

      return nextState

    default:
      return state;
  }
}
