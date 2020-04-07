import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Table from './Table';
import { fetchList } from './actions';
import useCrud from '../useCrud';
import './css/style.css';
export default function ListView() {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { createObject } = useCrud();
  const { objectName } = params;
  const { appName } = state.crud.nav;

  useEffect(() => {
    if (objectName) {
      dispatch(fetchList({ objectName, appName }));
    }
  }, [objectName]);
  return (
    <div className='list-view' data-testid='listview'>
      <Link data-testid='new' to='/crud/detail' onClick={createObject}>
        New
      </Link>
      {objectName}
      <div className='table'>
        <Table list={[]} objectName={objectName} propNames={[]} />
      </div>
    </div>
  );
}
