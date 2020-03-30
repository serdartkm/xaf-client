import actionTypes from './actionTypes';
export function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return { ...state, ...action.filter };
    default:
      return state;
  }
}
