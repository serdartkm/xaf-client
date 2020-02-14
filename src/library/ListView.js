import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { find } from '../library/redux/actions';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/style.css';

function ListView(props) {
  const [columnNames, setColumnNames] = useState([]);
  const [objectName, setObjectName] = useState(null);

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
      <Link to={`/edit${objectName}`}>Add new</Link>
      {objectName}
      <div className='table'>
        <div className='table-row'>
          {columnNames &&
            columnNames
              .filter(f => f !== 'collections')
              .map(c => {
                return <div className='table-head'>{c}</div>;
              })}
        </div>

        {props &&
          props.object &&
          props.object.collection &&
          props.object.collection.map(c => {
            const propNames = Object.keys(props.meta[1]).filter(
              f => f !== 'collection'
            );
            return (
              <div className='table-row'>
                {propNames.map(p => {
                  const value = c[p];
                  debugger;
                  if (value === '') {
                    return <div className='table-data'>{''}</div>;
                  }
                  if (value) {
                    return <div className='table-data'>{c[p]}</div>;
                  }
                })}
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
    find: () => {
      dispatch(find({ objectName }));
    },
    findByParent: () => {}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
