import actionTypes from './detailActionTypes';
export default function ObjectReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATED_NEW_OBJECT:
      return { ...action.payload };
    case actionTypes.VALUE_CHANGED:
      return { ...state, [action.payload.propName]: action.payload.value };
    default:
      return state;
  }
}
