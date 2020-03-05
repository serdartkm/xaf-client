import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import { Link, useLocation } from 'react-router-dom';
import './css/style.css';
import { findList } from '../redux/list-reducer/listActions';
import { navigationChanges } from '../redux/ui-reducer/uiActions';
import { createObjectClicked } from '../redux/detail-ui-reducer/detail-ui-action';

export default function ListView() {
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const { objectName } = appState.ui;
  const { list } = appState.list;
  function handleCreateObject() {
    dispatch(createObjectClicked({ objectName }));
  }

  useEffect(() => {
    if (location && location.pathname.substring(1) !== '') {
      dispatch(
        navigationChanges({ objectName: location.pathname.substring(1) })
      );
    }
  }, []);

  useEffect(() => {
    if (objectName && list && list.length === 0) {
      dispatch(findList({ objectName }));
    }
  }, [objectName]);

  return (
    <div className='list-view'>
      <Link
        data-testid={`new-${objectName}`}
        to={`/edit/${objectName}`}
        onClick={handleCreateObject}
      >
        New
      </Link>
      {objectName}
      <div className='table'>
        <Table />
      </div>
    </div>
  );
}
