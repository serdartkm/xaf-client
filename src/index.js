import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import * as serviceWorker from './serviceWorker';
import Authentication from './auth/Authentication';
import CrudApplication from './crud/CrudApplication';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './nav/Navigation';
import SideBar from './nav/SideBar';
import CrudSideNav from './crud/CrudSideNav';
import AuthSideNav from './auth/AuthSideNav';
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
          </div>
        );
      }}
    </SideBar>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Navigation>
      <RenderSideBar />
    </Navigation>
    <div
      style={{
        position: 'absolute',
        top: 108,
        left: 330,
        backgroundColor: '#546e7a',
        width: '77%',
        height: '85%',
        padding: 5
      }}
    >
      <Route path='/auth'>
        <Authentication />
      </Route>
      <Route path='/crud'>
        <CrudApplication />
      </Route>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);

serviceWorker.unregister();
