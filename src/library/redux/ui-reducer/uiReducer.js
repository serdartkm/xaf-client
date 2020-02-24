import uiActionTypes from './uiActionTypes';
const initState = {
  propNames: [],
  objectName: null,
  objectNames: [],
  metaData: null
};
export default function uiReducer(state = initState, action) {
  switch (action.type) {
    case uiActionTypes.APPLICATION_STARTED:
      return {
        ...state,
        objectName: action.payload.objectName,
        propNames: action.payload.propNames,
        objectNames: action.payload.objectNames,
        metaData: action.payload.metaData
      };

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
