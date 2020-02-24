import React, { useContext } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { useSelector } from 'react-redux';
export default function Table() {
  const appState = useSelector(state => state);
  const { list } = appState;
  const { propNames, objectName } = appState.ui;
debugger;
  return (
    <div>
      <TableHeader objectName={objectName} columnNames={propNames} />
      <TableBody objectName={objectName} columnNames={propNames} list={list} />
    </div>
  );
}
