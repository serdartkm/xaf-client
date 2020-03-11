import React, { useEffect } from 'react';
import Table from './Table';
import { Link, useParams } from 'react-router-dom';
import './css/style.css';

export default function ListView({ state, find }) {
  const params = useParams();
  const { objectName } = params;

  const { list, propNames } = state && state;

  useEffect(() => {
    find({ objectName });
  }, [objectName]);

  return (
    <div className='list-view'>
      <Link
        data-testid={`new-${objectName}`}
        to={{ pathname: `/crud/detail/${objectName}`, state: 'new' }}
      >
        New
      </Link>
      {objectName}
      <div className='table'>
        <Table
          list={state && list}
          objectName={objectName}
          propNames={state && propNames}
        />
      </div>
    </div>
  );
}
