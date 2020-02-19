import React from 'react';
import { Provider } from 'react-redux';
import store from './library/redux/store';
import Navigation from './library/navigation/Navigation';
import CrudContextProvider from '../CRUDContext';



export default function App({objectMeta}) {
    const visaStore = store(objectMeta);
  return (
    <Provider store={visaStore}>
      <CrudContextProvider
        // columnNames={['firstName', 'lastName']}
        // list={[{ firstName: 'Gurban', lastName: 'Jumyev' }]}
        // objectName='employee'
        objectMeta={objectMeta}
      >
        <Navigation />
      </CrudContextProvider>
    </Provider>
  );
}
