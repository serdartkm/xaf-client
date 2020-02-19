import React, { useContext } from 'react';
import ListView from '../list-view/ListView';
import DetailView from '../detail-view/DetailView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { CRUDContext } from '../CRUDContext';
import './css/style.css';

export default function Navigation() {
  const crudContext = useContext(CRUDContext);
  const { objectNames } = crudContext;
  return (
    <BrowserRouter>
      <div className='nav'>
        <div className='nav-link'>
          {objectNames.map(objectName => {
            debugger;
            return (
              <div className='link' key={objectName}>
                <Link to={`/${objectName}`}>{objectName}</Link>
              </div>
            );
          })}
        </div>
        <div className='nav-route-container'>
          {objectNames.map(objectName => {
            return (
              <div className='nav-route' key={objectName}>
                <Route path={`/${objectName}`}>
                  <ListView />
                </Route>
                <Route path={`/edit/${objectName}`}>
                  <DetailView />
                </Route>
              </div>
            );
          })}
        </div>
      </div>
    </BrowserRouter>
  );
}
