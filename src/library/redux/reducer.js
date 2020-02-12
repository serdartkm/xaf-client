import actionTypes from './actionTypes';

export default function reducer(initialState) {
  debugger;
  return (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CREATE_DATA:
      case actionTypes.DELETE_DATA:
      case actionTypes.UPDATE_DATA:
      case actionTypes.FIND_DATA:
      case actionTypes.VALUE_CHANGED:
        const nextState = {
          ...state,
          [action.payload.objectName]: {
            ...state[action.payload.objectName],
            [action.payload.propName]: action.payload.value
          }
        };
        debugger;
        return nextState;
      default:
        return state;
    }
  };
}
