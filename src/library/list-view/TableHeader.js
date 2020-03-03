import React from 'react';
export default function TableHeader({ columnNames }) {
  return (
    <div className='table-row'>
      {columnNames &&
        columnNames.map(c => {
          return (
            <div data-testid={`col-${c}`} className='table-head' key={c}>
              {c}
            </div>
          );
        })}
      <div data-testid={`col-edit`} className='table-head'>
        Edit
      </div>
      <div data-testid={`col-delete`} className='table-head'>
        Delete
      </div>
    </div>
  );
}
