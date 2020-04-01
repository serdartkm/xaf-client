import React from 'react';
import { Route } from 'react-router-dom';
import ListView from './list-view/ListView';
import DetailView from './detail-view/DetailView';
import Dashboard from './dataset/index';

export default function CrudApplication() {
  return (
    <div className='nav-route-container'>
      <Route exact path={`/crud/list/:objectName`}>
        <ListView />
      </Route>
      <Route exact path='/crud/detail'>
        <DetailView />
      </Route>
      <Route exact path='/crud/dataset'>
        <Dashboard />
      </Route>
    </div>
  );
}
