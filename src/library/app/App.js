import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navigation from '../navigation/Navigation';
import CrudContextProvider from '../CRUDContext';
import { applicationStarted } from '../redux/ui-reducer/uiActions';
import mockMetaData from '../mock-data/mockMetaData';
export default function App({ metaData, defaultObjectName }) {
  const appMetaData = metaData ? metaData : mockMetaData;
  debugger;
  store.dispatch(
    applicationStarted({
      objectName: defaultObjectName,
      metaData: appMetaData
    })
  );
  return (
    <Provider store={store}>
      <CrudContextProvider>
        <Navigation />
      </CrudContextProvider>
    </Provider>
  );
}
