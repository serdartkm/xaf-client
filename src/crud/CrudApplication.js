import React from 'react';
import { Route } from 'react-router-dom';
import ListView from './list-view/ListView';
import DetailView from './detail-view/DetailView';
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
          createObject={createObject}
          selectObject={selectObject}
          deleteOne={deleteOne}
          find={find}
          state={state}
        />
      </Route>
      <Route exact path='/crud/detail'>
        <DetailView
          handleChange={handleChange}
          insertOne={insertOne}
          updateOne={updateOne}
          state={state}
          metaData={metaData}
        />
      </Route>
    </div>
  );
}
