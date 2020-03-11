import React from 'react';
import ListView from './list-view/ListView';
import DetailView from './detail-view/DetailView';
import { Route } from 'react-router-dom';
import useCrud from './useCrud';
export default function CrudApplication({ metaData }) {
  const {
    insertOne,
    handleChange,
    state,
    updateOne,
    deleteOne,
    createObject,
    selectObject,
    find
  } = useCrud({ metaData });
  return (
    <div className='nav-route-container'>
      <Route exact path={`/crud/list/:objectName`}>
        <ListView
          find={find}
          selectObject={selectObject}
          state={state}
          deleteOne={deleteOne}
        />
      </Route>
      <Route exact path={`/crud/detail/:objectName`}>
        <DetailView
          createObject={createObject}
          insertOne={insertOne}
          handleChange={handleChange}
          state={state}
          updateOne={updateOne}
          deleteOne={deleteOne}
        />
      </Route>
    </div>
  );
}
