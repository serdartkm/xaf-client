import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import { Link } from 'react-router-dom';
import './css/style.css';
import { findList } from '../redux/list-reducer/listActions';
import { createObjectClicked } from '../redux/detail-ui-reducer/detail-ui-action';

export default function ListView() {
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const { objectName } = appState.ui;
  function handleCreateObject() {
    dispatch(createObjectClicked({ objectName }));
  }

  useEffect(() => {
    if (objectName) {
      dispatch(findList({ objectName }));
    }
  }, [objectName]);

  return (
    <div className='list-view'>
      <Link to={`/edit/${objectName}`} onClick={handleCreateObject}>
        New
      </Link>
      {objectName}
      <div className='table'>
        <Table />
      </div>
    </div>
  );
}
