import React from 'react';
import { Provider } from 'react-redux';
import createAppStore from '../redux/store';
import Navigation from '../navigation/Navigation';
import CrudContextProvider from '../CRUDContext';
import mockMetaData from '../mock-data/mockMetaData';
export default function App({ metaData }) {
  const appMetaData = metaData ? metaData : mockMetaData;

  const store = createAppStore({ metaData: appMetaData });
  window.store = store;

  return (
    <Provider store={store}>
      <CrudContextProvider>
        <Navigation />
      </CrudContextProvider>
    </Provider>
  );
}
