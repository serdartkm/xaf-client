import actionTypes from '../actionTypes';
export default function metaReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_OBJECT_METADATA:
      return { ...action.payload };
    default:
      return state;
  }
}
