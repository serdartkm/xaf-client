import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CRUDContext } from '../CRUDContext';
export default function TableBody(props) {
  const {
    handleDocSelected,
    handleDelete,

  } = props;
  const crudContext = useContext(CRUDContext);

  const { list, objectName,columnNames } = crudContext;
  
  return (
    <div>
      {list &&
        list.map((c, i) => {
          const obj = c;

          return (
            <div className='table-row' key={i}>
              {columnNames &&
                columnNames.map((p, a) => {
                  const value = c[p];

                  debugger;
                  if (value === '') {
                    return (
                      <div key={a} className='table-data'>
                        {''}{' '}
                      </div>
                    );
                  }
                  if (value) {
                    return (
                      <div key={a} className='table-data'>
                        {c[p]}
                      </div>
                    );
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
