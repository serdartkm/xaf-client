import React from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';
import './css/style.css';

export default function ListView({
  propNames,
  objectName,
  list,
  createObject
}) {
  return (
    <div className='list-view'>
      <Link
        data-testid={`new-${objectName}`}
        to={`/edit/${objectName}`}
        onClick={createObject}
      >
        New
      </Link>
      {objectName}
      <div className='table'>
        <Table list={list} objectName={objectName} propNames={propNames} />
      </div>
    </div>
  );
}
