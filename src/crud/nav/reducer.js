import actionTypes from './actionTypes';
export default function navReducer(
  state = { loading: false },
  action
) {

  switch (action.type) {
    case actionTypes.FETCH_NAVIGATIONS_STARTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_NAVIGATIONS_SUCCESS:
      return { ...state, loading: false, [action.appName]: action.data };
    case actionTypes.FETCH_NAVIGATIONS_FAILED:
      return { ...state, loading: false, [action.appName]: action.error };
    default:
      return state;
  }
}
