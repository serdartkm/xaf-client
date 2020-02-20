import uiActionTypes from './uiActionTypes';
const initState = {
  propNames: [],
  objectName: null
};
export default function uiReducer(state = initState, action) {
  switch (action.type) {
    case uiActionTypes.NAVIGATION_CHANGED:
      return {
        ...state,
        objectName: action.objectName,
        propNames: action.propNames
      };

    default:
      return state;
  }
}
