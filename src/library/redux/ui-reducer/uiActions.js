import actionTypes from './uiActionTypes';
import getPropNames from './getPropNames';
import getObjectNames from './getObjectNames';

export function navigationLoaded() {

  const {metaData} = window.store.getState().ui

  const objectNames = getObjectNames({ metaData });
  return {
    type: actionTypes.NAVIGATION_LOADED,
    payload: {
      objectNames
    }
  };
}

export function navigationChanges({ objectName }) {
  // const { metaData } =
  //   (window.Cypress && window.store.getState().ui) || store.getState().ui;
  const {metaData} = window.store.getState().ui

  const propNames = getPropNames({ objectName, metaData });

  return {
    type: actionTypes.NAVIGATION_CHANGED,
    objectName,
    propNames
  };
}
