import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Table from './Table';
import getNavigationFilter from '../getNavigationFilter';
import './css/style.css';
export default function ListView({ state, find, createObject }) {
  const params = useParams();
  const { objectName } = params;
  const location = useLocation();

  const { list, propNames, metaData } = state;

  useEffect(() => {
    if (objectName && location && metaData) {
      const objMeta = metaData.find(m => m.objectName === objectName);
      const listView = '';
      const filter = getNavigationFilter({
        metaData,
        objectName,
        navigation: location.state.navigation
      });
      find({ objectName, filter, metaData: objMeta, listView });
    }
  }, [objectName, location, metaData]);
  return (
    <div className='list-view' data-testid='listview'>
      <Link data-testid='new' to='/crud/detail' onClick={createObject}>
        New
      </Link>
      {objectName}
      <div className='table'>
        <Table list={list} objectName={objectName} propNames={propNames} />
      </div>
    </div>
  );
}
