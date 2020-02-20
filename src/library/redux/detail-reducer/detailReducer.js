import actionTypes from '../actionTypes';
export default function ObjectReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.OBJECT_SELECTED:
      return { ...action.payload };
    case actionTypes.VALUE_CHANGED:
      return { ...state, [action.payload.propName]: action.payload.value };
    default:
      return state;
  }
}
