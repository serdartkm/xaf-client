import React from 'react';
import ListView from './list-view/ListView';
import { Route } from 'react-router-dom';

export default function CrudApplication({ metaData }) {
  return (
    <div className='nav-route-container'>
      <Route exact path={`/crud/list/:objectName`}>
        <ListView metaData={metaData} />
      </Route>
    </div>
  );
}
