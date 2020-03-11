import React, { useEffect } from 'react';
import Table from './Table';
import { Link, useParams } from 'react-router-dom';
import './css/style.css';

export default function ListView({ state, createObject, find }) {
  const params = useParams();
  const { objectName } = params;
  const { list, propNames } = state;

  useEffect(() => {
    find({ objectName });
  }, [objectName]);
  return (
    <div className='list-view'>
      <Link
        data-testid={`new-${objectName}`}
        to={`/crud/detail/${objectName}`}
        onClick={() => createObject({ objectName })}
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
