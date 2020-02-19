import React, { useContext } from 'react';
import Table from './Table';
import { CRUDContext } from '../CRUDContext';
import { Link } from 'react-router-dom';
import './css/style.css';

export default function ListView(props) {
  const crudContext = useContext(CRUDContext);
  const { objectName } = crudContext;

  return (
    <div className='list-view'>
      <Link to={`/edit/${objectName}`}>Add new</Link>
      {objectName}
      <div className='table'>
        <Table />
      </div>
    </div>
  );
}
