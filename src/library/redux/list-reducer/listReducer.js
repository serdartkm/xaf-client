import actionTypes from './listActionTypes';

const initState = {
  list: [],
  finding: false,
  error: null
};
export default function(state = initState, action) {
  let nextState = {};
  switch (action.type) {
    case actionTypes.FINDING_LIST:
      nextState = {
        ...state,
        finding: true
      };

      return nextState;
    case actionTypes.FINDING_LIST_FULFILLED:
      nextState = {
        ...state,
        finding: false,
        list: action.payload.result
      };
  
      return nextState;
    case actionTypes.FINDING_LIST_FAILED:
      nextState = {
        ...state,
        finding: false,
        error: action.error
      };

      return nextState;

    default:
      return state;
  }
}
