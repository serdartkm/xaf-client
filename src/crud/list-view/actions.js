import actionTypes from './actionTypes';
export function setNavFilter({ filter }) {
  return { type: actionTypes.SET_FILTER, filter };
}
