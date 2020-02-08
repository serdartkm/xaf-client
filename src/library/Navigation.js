import React, { useState, useEffect } from 'react';
import ListView from './ListView';
import { BrowserRouter, Route, Link } from 'react-router-dom';
export default function Navigation({ objectMeta }) {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    if (objectMeta) {
      setObj(Object.entries(objectMeta));
    }
  }, [objectMeta]);

  return (
    <BrowserRouter>
      <ul>
        {obj.map(o => {
          return (
            <li>
              <Link to={`/${o[0]}`}>{o[0]}</Link>
            </li>
          );
        })}
      </ul>

      {obj.map(o => {
        return (
          <Route path={`/${o[0]}`}>
            <ListView objectName={o[0]} />
          </Route>
        );
      })}
    </BrowserRouter>
  );
}
