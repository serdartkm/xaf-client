import uiActionTypes from './uiActionTypes';
const initState = (window.Cypress && window.initialState) || {
  propNames: [],
  objectName: null,
  objectNames: [],
  metaData: null
};
export default function uiReducer(state = initState, action) {
  let nextState = null;
  switch (action.type) {
    case uiActionTypes.NAVIGATION_LOADED:
      nextState = {
        ...state,
        objectNames: action.payload.objectNames
      };

      return nextState;

    case uiActionTypes.NAVIGATION_CHANGED:
      nextState = {
        ...state,
        objectName: action.objectName,
        propNames: action.propNames
      };
   
      return nextState;

    default:
      return state;
  }
}
