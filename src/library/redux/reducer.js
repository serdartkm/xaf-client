import actionTypes from './actionTypes';

export default function reducer(initialState) {
  return (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CREATE_DATA:
      case actionTypes.DELETE_DATA:
      case actionTypes.UPDATE_DATA:
      case actionTypes.FIND_DATA:

      default:
        return state;
    }
  };
}
