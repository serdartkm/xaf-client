import React from 'react';
import { Link } from 'react-router-dom';

export default function TableBody(props) {
  const {
    list,
    objectName,
    columnNames,
    handleDocSelected,
    handleDelete
  } = props;

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
                  if (value === '') {
                    return (
                      <div key={a} className='table-data'>
                        {''}{' '}
                      </div>
                    );
                  }
                  if (value) {
                    const fieldData = c[p];

                    return (
                      <div key={a} className='table-data'>
                        {fieldData}
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
