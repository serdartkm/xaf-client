import React from 'react';
export default function TableHeader({ columnNames }) {
  return (
    <div className='table-row'>
      {columnNames &&
        columnNames
          .filter(f => f !== 'collections')
          .map(c => {
            return <div className='table-head'>{c}</div>;
          })}
      <div className='table-head'>Edit</div>
      <div className='table-head'>Delete</div>
    </div>
  );
}
