import uiActionTypes from './uiActionTypes';
const initState = {
  propNames: [],
  objectName: null,
  objectNames: [],
  metaData: null
};
export default function uiReducer(state = initState, action) {
  let nextState = null;
  switch (action.type) {
    case uiActionTypes.APPLICATION_STARTED:
      nextState = {
        ...state,
        objectName: action.payload.objectName,
        propNames: action.payload.propNames,
        objectNames: action.payload.objectNames,
        metaData: action.payload.metaData
      };
      debugger;
      return nextState;

    case uiActionTypes.NAVIGATION_CHANGED:
      nextState ={
        ...state,
        objectName: action.objectName,
        propNames: action.propNames
      };
      debugger;
      return nextState

    default:
      return state;
  }
}
