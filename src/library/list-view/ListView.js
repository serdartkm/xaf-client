import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Table from './Table';
import { CRUDContext } from '../CRUDContext';
import { Link } from 'react-router-dom';
import './css/style.css';
import { findList } from '../redux/list-reducer/listActions';
export default function ListView(props) {
  const crudContext = useContext(CRUDContext);
  const dispatch = useDispatch();
  const { objectName } = crudContext;

  useEffect(() => {
    if (objectName) {
      dispatch(findList({ objectName }));
    }
  }, [objectName]);

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
