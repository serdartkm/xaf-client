import React, { useContext } from 'react';
import { CRUDContext } from '../CRUDContext';
export default function TableHeader() {
  const crudContext = useContext(CRUDContext);

  const { columnNames } = crudContext;

  return (
    <div className='table-row'>
      {columnNames &&
        columnNames.map(c => {
          return (
            <div className='table-head' key={c}>
              {c}
            </div>
          );
        })}
      <div className='table-head'>Edit</div>
      <div className='table-head'>Delete</div>
    </div>
  );
}
