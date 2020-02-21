import actionTypes from './uiActionTypes';
import getPropNames from './getPropNames';
export  function navigationChanges({ objectName, metaData }) {

  const propNames = getPropNames({ objectName, metaData });
  return {
    type: actionTypes.NAVIGATION_CHANGED,
    objectName,
    propNames
  };
}
