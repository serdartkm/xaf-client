import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { findCollection, findByParent } from '../library/redux/actions';
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
      props.findCollection({ objectName });
    }
  }, [columnNames]);
  return (
    <div className='list-view'>
     <Link to={`/edit${objectName}`}>Add new</Link>
      {objectName}
      <table>
        <tr>
          {columnNames &&
            columnNames.map(c => {
              debugger;
              return <th>{c}</th>;
            })}
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
      </table>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  debugger;
  const { meta } = ownProps;
  return {
    [meta[0]]: state[meta[0]]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { meta } = ownProps;
  return {
    findCollection: () => {},
    findByParent: () => {}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
