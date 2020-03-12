import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from './Table';
import './css/style.css';
export default function ListView({ state, find, createObject }) {
  const params = useParams();
  const { objectName } = params;
  const { list, propNames } = state;
  useEffect(() => {
    find({ objectName });
  }, [objectName]);
  return (
    <div className='list-view'>
      <Link to='/crud/detail' onClick={createObject}>
        Create
      </Link>

      {objectName}
      <div className='table'>
        <Table list={list} objectName={objectName} propNames={propNames} />
      </div>
    </div>
  );
}
