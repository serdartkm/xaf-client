import React, { useContext } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { CRUDContext } from '../CRUDContext';
export default function Table() {
  const crudContext = useContext(CRUDContext);
  const { objectName, propNames, list } = crudContext;

  return (
    <div>
      <TableHeader objectName={objectName} columnNames={propNames} />
      <TableBody objectName={objectName} columnNames={propNames} list={list} />
    </div>
  );
}
