import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListView from '../list-view/ListView';
import DetailView from '../detail-view/DetailView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { navigationChanges } from '../redux/ui-reducer/uiActions';
import './css/style.css';

export default function Navigation() {
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const { objectNames } = appState.ui;

  function handleChangeNav({ objectName }) {
    dispatch(navigationChanges({ objectName }));
  }

  return (
    <BrowserRouter>
      <div className='nav'>
        <div className='nav-link'>
          {objectNames &&
            objectNames.map(objectName => {
              return (
                <div className='link' key={objectName}>
                  <Link
                    to={`/${objectName}`}
                    onClick={() => handleChangeNav({ objectName })}
                  >
                    {objectName}
                  </Link>
                </div>
              );
            })}
        </div>
        <div className='nav-route-container'>
          {objectNames.map(objectName => {
            return (
              <div className='nav-route' key={objectName}>
                <Route path={`/${objectName}`}>
                  <ListView />
                </Route>
                <Route path={`/edit/${objectName}`}>
                  <DetailView />
                </Route>
              </div>
            );
          })}
        </div>
      </div>
    </BrowserRouter>
  );
}
