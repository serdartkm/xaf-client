import React, { useState, useEffect } from 'react';
import ListView from './ListView';
import DetailView from './DetailView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/style.css';

export default function Navigation({ objectMeta }) {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    if (objectMeta) {
      setObj(Object.entries(objectMeta));
    }
  }, [objectMeta]);

  return (
    <BrowserRouter>
      <div className='nav'>
        <div className='nav-link'>
          {obj.map(o => {
            return (
              <div className='link'>
                <Link to={`/${o[0]}`}>{o[0]}</Link>
              </div>
            );
          })}
        </div>
        <div className='nav-route-container'>
          {obj.map(o => {
            return (
              <div className='nav-route'>
                <Route path={`/${o[0]}`}>
                  <ListView meta={o} />
                </Route>
                <Route path={`/edit${o[0]}`}>
                  <DetailView meta={o} />
                </Route>
              </div>
            );
          })}
        </div>
      </div>
    </BrowserRouter>
  );
}
