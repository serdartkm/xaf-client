import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import * as serviceWorker from './serviceWorker';
import Authentication from './auth/Authentication';
import FileSystem from './file-system/FileSystem';
import { Provider } from 'react-redux';
import CrudApplication from './crud/CrudApplication';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './nav/Navigation';
import SideBar from './nav/SideBar';
import CrudSideNav from './crud/CrudSideNav';
import AuthSideNav from './auth/AuthSideNav';
import FileSystemSideNav from './file-system/FileSystemSideNav';
import mockMetaData from './crud/mock-data/mockMetaData';

import store from './store';

if (window.Cypress) {
  window.store = store
}
function RenderSideBar() {
  return (
    <SideBar>
      {({ openNav, selectedNav }) => {
        return (
          <div>
            <AuthSideNav
              title='Authentication'
              id={0}
              openNav={openNav}
              selectedNav={selectedNav}
            />
            <CrudSideNav
              title='CRUD'
              id={1}
              openNav={openNav}
              selectedNav={selectedNav}
            />
            <FileSystemSideNav
              title='FileSystem API'
              id={2}
              openNav={openNav}
              selectedNav={selectedNav}
            />
          </div>
        );
      }}
    </SideBar>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation>
        <RenderSideBar />
      </Navigation>
      <div
        style={{
          position: 'absolute',
          top: 108,
          left: 330,
          backgroundColor: '#607d8b',
          width: '77%',
          height: '85%',
          padding: 5
        }}
      >
        <Authentication />
        <CrudApplication metaData={mockMetaData} />
        <FileSystem />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
