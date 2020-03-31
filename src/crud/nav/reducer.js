import actionTypes from './actionTypes';
export default function navReducer(
  state = { loading: false, appName: null, navigations: [] },
  action
) {
  switch (action.type) {
    case actionTypes.FETCH_NAVIGATIONS_STARTED:
      return { ...state, loading: true, appName: action.appName };
    case actionTypes.FETCH_NAVIGATIONS_SUCCESS:
      return { ...state, loading: false, navigations: action.navigations };
    case actionTypes.FETCH_NAVIGATIONS_FAILED:
      return { ...state, loading: false, navigations: action.error };
    default:
      return state;
  }
}
