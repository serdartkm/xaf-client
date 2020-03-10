import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function Table({objectName,propNames,list}) {


  return (
    <div>
      <TableHeader objectName={objectName} columnNames={propNames} />
      <TableBody objectName={objectName} columnNames={propNames} list={list} />
    </div>
  );
}
