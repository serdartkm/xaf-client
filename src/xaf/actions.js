import actionTypes from './actionTypes';

export function valueChanged({ propName, value, dispatch }) {
  dispatch({ type: actionTypes.VALUE_CHANGED, payload: { propName, value } });
}

export function find({ objectName }) {

    
}
