import actionTypes from './actionTypes';
const initState = {
  loading: true
};
export default function listReducer(state = initState, action) {
  let nextState = null;
  switch (action.type) {
    case actionTypes.FINDING:
      return { ...state, finding: true };

    case actionTypes.FINDING_FAILED:
      debugger;
      return { ...state, finding: false };
    case actionTypes.DELETING_ONE:
      return { ...state, deleting: true };
    case actionTypes.DELETING_ONE_FULFILLED:
      nextState = {
        ...state,
        deleting: false,
        collections: {
          ...state.list,
          list: [...state.list.filter(f => f._id !== action.payload._id)]
        }
      };
      debugger;
      return { ...nextState };
    case actionTypes.DELETING_ONE_FAILED:
      return { ...state, deleting: false };
  }
}
