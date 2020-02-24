import actionTypes from './uiActionTypes';
import getPropNames from './getPropNames';
import getObjectNames from './getObjectNames';
import store from '../store';
export function applicationStarted({ objectName, metaData }) {
  const propNames = getPropNames({ objectName, metaData });
  const objectNames = getObjectNames({ objectName, metaData });
  return {
    type: actionTypes.APPLICATION_STARTED,
    payload: {
      objectName,
      objectNames,
      propNames,
      metaData
    }
  };
}

export function navigationChanges({ objectName }) {
  const { metaData } = store.getState().ui;
  const propNames = getPropNames({ objectName, metaData });

  return {
    type: actionTypes.NAVIGATION_CHANGED,
    objectName,
    propNames
  };
}
