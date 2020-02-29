import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListView from '../list-view/ListView';
import DetailView from '../detail-view/DetailView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { navigationLoaded } from '../redux/ui-reducer/uiActions';
import './css/style.css';
export default function Navigation() {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);
  const { metaData, objectNames } = appState.ui;

  useEffect(() => {
    if (metaData) {
      dispatch(navigationLoaded());
    }
  }, [metaData]);

  return (
    <BrowserRouter>
      <div className='nav'>
        <div className='nav-link'>
          {objectNames &&
            objectNames.map(objectName => {
              return (
                <div className='link' key={objectName}>
                  <Link
                    data-testid={`nav-${objectName}`}
                    to={{ pathname: `/${objectName}`, state: { objectName } }}
                  >
                    {objectName}
                  </Link>
                </div>
              );
            })}
        </div>
        <div className='nav-route-container'>
          {objectNames &&
            objectNames.map(objectName => {
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
