import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navigation from '../navigation/Navigation';
import CrudContextProvider from '../CRUDContext';

export default function App({ metaData }) {
  return (
    <Provider store={store}>
      <CrudContextProvider  metaData={metaData}>
        <Navigation metaData={metaData} />
      </CrudContextProvider>
    </Provider>
  );
}
