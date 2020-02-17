import React, { useState, useEffect } from 'react';
import ListView from '../list-view/ListView';
import DetailView from '../detail-view/DetailView';
import { selectedObjectName } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/style.css';

export default function Navigation({ objectMeta }) {
  const [obj, setObj] = useState([]);
  const reduxDispatch = useDispatch();

  function handleSelectedObjectName({ objectName, propNames,propMetas }) {
    debugger;
    reduxDispatch(selectedObjectName({ objectName, propNames,propMetas }));
 
  }

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
            const propNames = Object.keys(o[1]);
            const propMetas = Object.entries(o[1]);
            const objectName = o[0];
            debugger;
            return (
              <div className='link'>
                <Link
                  to={`/${o[0]}`}
                  onClick={() =>
                    handleSelectedObjectName({
                      objectName,
                      propNames,
                      propMetas
                    })
                  }
                >
                  {o[0]}
                </Link>
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
                <Route path={`/edit/${o[0]}`}>
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
