import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import * as serviceWorker from './serviceWorker';
import Authentication from './auth/Authentication';
import { BrowserRouter } from 'react-router-dom';
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
            <AuthSideNav title="Authentication" id={0} openNav={openNav} selectedNav={selectedNav} />
            <CrudSideNav title="CRUD" id={1} openNav={openNav} selectedNav={selectedNav} />
          </div>
        );
      }}
    </SideBar>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Authentication sidebar={<RenderSideBar />}>
          {({ authState }) => {
            return <Navigation />;
          }}
        </Authentication>
      </Suspense>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);

serviceWorker.unregister();
