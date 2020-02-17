import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function TableBody(props) {
  const reduxState = useSelector(state => state);
  const { handleDocSelected, handleDelete } = props;
  const { list, propNames, objectName } = reduxState;
  return (
    <div>
      {list &&
        list.map(c => {
          const obj = c;

          return (
            <div className='table-row'>
              {propNames &&
                propNames.map(p => {
                  const value = c[p];

                  debugger;
                  if (value === '') {
                    return <div className='table-data'>{''} </div>;
                  }
                  if (value) {
                    return <div className='table-data'>{c[p]}</div>;
                  }
                })}
              <div className='table-data'>
                <Link
                  to={{ pathname: `/edit/${objectName}`, state: obj }}
                  onClick={() => handleDocSelected(obj)}
                >
                  Edit
                </Link>
              </div>
              <div className='table-data'>
                <button onClick={() => handleDelete(c._id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
