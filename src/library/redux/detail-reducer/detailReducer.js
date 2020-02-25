import actionTypes from './detailActionTypes';
import detailUiActionTypes from '../detail-ui-reducer/detail-ui-actionTypes';
export default function DetailReducer(state = {}, action) {
  switch (action.type) {
    case detailUiActionTypes.CREATE_OBJECT_CLICKED:
      return { ...action.payload.object };
    case actionTypes.VALUE_CHANGED:
      return { ...state, [action.payload.propName]: action.payload.value };
    default:
      return state;
  }
}
