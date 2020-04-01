import actionTypes from './actionTypes';

export function focusDropdown({ objectName, defaultProperty }) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.DROPDOWN_FUCUSED,
      objectName,
      defaultProperty
    });
    return fetch(
      `${process.env.REACT_APP_XAF_SERVER_URL}/find?document=${objectName}`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: actionTypes.DROPDOWN_FIND_SUCCESS,
          data,
          objectName
        });
      })
      .catch(err => {
        dispatch({
          type: actionTypes.DROPDOWN_FIND_FAILED,
          error: err,
          objectName
        });
      });
  };
}

export function selectDropdownItem({ item, objectName }) {
  return { type: actionTypes.DROPDOWN_ITEM_SELECTED, item, objectName };
}

export function setInitialValue({ item, objectName }) {
  return { type: actionTypes.DROPDOWN_MOUNTED, item, objectName };
}
