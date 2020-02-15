import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { find, deleteOne, addNewDocument } from '../library/redux/actions';
import { Link } from 'react-router-dom';
import './css/style.css';

function ListView(props) {
  const [columnNames, setColumnNames] = useState([]);
  const [objectName, setObjectName] = useState(null);

  function handleDelete(_id) {
    const filter = { _id };
    props.dispatch(deleteOne({ objectName, filter }));
  }

  function addNewDoc() {
    props.dispatch(addNewDocument({ objectName }));
  }

  useEffect(() => {
    if (props && props.meta) {
      setObjectName(props.meta[0]);
    }
  }, [props.meta]);

  useEffect(() => {
    if (props.meta) {
      setColumnNames(Object.keys(props.meta[1]));
    }
  }, [props.meta]);
  useEffect(() => {
    if (columnNames.length > 0) {
      if (props.parentField) {
        props.findByParent({ objectName, parentField: props.parentField });
      }
    } else {
      props.find();
    }
  }, [columnNames]);
  return (
    <div className='list-view'>
      <Link to={`/edit/${objectName}`} onClick={addNewDoc}>
        Add new
      </Link>
      {objectName}
      <div className='table'>
        <div className='table-row'>
          {columnNames &&
            columnNames
              .filter(f => f !== 'collections')
              .map(c => {
                return <div className='table-head'>{c}</div>;
              })}
          <div className='table-head'>Edit</div>
          <div className='table-head'>Delete</div>
        </div>

        {props &&
          props.object &&
          props.object.collection &&
          props.object.collection.map(c => {
            const propNames = Object.keys(props.meta[1]).filter(
              f => f !== 'collection'
            );
            const obj = c;
            //  delete obj.collection;
            return (
              <div className='table-row'>
                {propNames.map(p => {
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
                  <Link to={{ pathname: `/edit/${objectName}`, state: obj }}>
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
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { meta } = ownProps;
  return {
    object: state[meta[0]]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { meta } = ownProps;
  const objectName = meta[0];

  return {
    dispatch,
    find: () => {
      debugger;
      dispatch(find({ objectName }));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
