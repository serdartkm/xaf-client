import React from 'react';
import ListView from './list-view/ListView';
import DetailView from './detail-view/DetailView';
import { Route } from 'react-router-dom';
import CrudProvider from './CrudProvider';
export default function CrudApplication({ metaData, objectName }) {
  return (
    <CrudProvider objectName={objectName}>
      {({
        insertOne,
        handleChange,
        state,
        updateOne,
        deleteOne,
        createObject,
        selectObject
      }) => {
        return (
          <div className='nav-route-container'>
          
            <Route exact path={`/crud/list/:objectName`}>
              <ListView
                createObject={createObject}
                selectObject={selectObject}
                state={state}
                metaData={metaData}
                deleteOne={deleteOne}
              />
            </Route>
            <Route path={`/crud/detail/${objectName}`}>
              <DetailView
                insertOne={insertOne}
                handleChange={handleChange}
                state={state}
                metaData={metaData}
                updateOne={updateOne}
                deleteOne={deleteOne}
              />
            </Route>
          </div>
        );
      }}
    </CrudProvider>
  );
}
