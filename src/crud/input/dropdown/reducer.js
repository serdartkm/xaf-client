import actionTypes from './actionTypes';
export default function(
  state = {
    open: ''
  },
  action
) {
  switch (action.type) {
    case actionTypes.DROPDOWN_FUCUSED:
      return {
        ...state,
        open: action.objectName,
        [action.objectName]: {
          defaultProperty: action.defaultProperty
        }
      };
    case actionTypes.DROPDOWN_FIND_SUCCESS:
      return {
        ...state,
        [action.objectName]: { ...state[action.objectName], items: action.data }
      };
    case actionTypes.DROPDOWN_FIND_FAILED:
      return {
        ...state,
        [action.objectName]: {
          ...state[action.objectName],
          error: action.error
        }
      };
    case actionTypes.DROPDOWN_ITEM_SELECTED:
      return {
        ...state,
        open: '',
        [action.objectName]: { ...state[action.objectName], item: action.item }
      };
    case actionTypes.DROPDOWN_MOUNTED:
      return {
        ...state,
        [action.objectName]: {
          ...state[action.objectName],
          item: action.item,
          items: []
        }
      };
    default:
      return state;
  }
}
