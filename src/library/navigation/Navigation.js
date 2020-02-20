import React, { useContext, useEffect, useState } from 'react';
import ListView from '../list-view/ListView';
import DetailView from '../detail-view/DetailView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import getObjectNames from '../redux/ui-reducer/getObjectNames';
import mockMetaData from '../redux/ui-reducer/test/mockMetaData';
import './css/style.css';

export default function Navigation({ metaData }) {
  const [objectNames, setObjectNames] = useState([]);

  useEffect(() => {
    if (metaData !== null && metaData !== undefined) {
      setObjectNames(getObjectNames({ metaData }));
    } else {
      setObjectNames(getObjectNames({ metaData: mockMetaData }));
    }
  }, [metaData, mockMetaData]);

  return (
    <BrowserRouter>
      <div className='nav'>
        <div className='nav-link'>
          {objectNames.map(objectName => {
         
            return (
              <div className='link' key={objectName}>
                <Link to={`/${objectName}`}>{objectName}</Link>
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
