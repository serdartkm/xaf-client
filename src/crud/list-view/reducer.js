import actionTypes from './actionTypes';
export default function reducer(
  state = { data: [], loading: false, error: null },
  action
) {
  switch (action.type) {
    case actionTypes.FETCH_LIST_STARTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_LIST_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case actionTypes.FETCH_LIST_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
