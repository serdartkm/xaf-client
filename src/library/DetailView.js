import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  insertOne,
  changeValue,
  documentSelected,
  updateOne
} from '../library/redux/actions';
import Input from './Input';
import './css/style.css';
function Editor({ onSave, onSaveAndClose, onDelete, onCancel }) {
  debugger;
  return (
    <div className='editor'>
      <button className='btn' type='button' onClick={onSave}>
        Save
      </button>
      <button className='btn' type='button' onClick={onSaveAndClose}>
        Save And Close
      </button>
      <button className='btn' type='button' onClick={onDelete}>
        Delete
      </button>
      <button className='btn' type='button' onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}

function DetailView(props) {
  const [metaCollection, setMetaCollection] = useState([]);
  const [objectName, setObjectName] = useState(null);
  const location = useLocation();
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  function handleSave() {
    const body = { ...props.obj };
    delete body.collection;
    debugger;
    if (props.obj && props.obj._id) {
      debugger;
      props.dispatch(updateOne({ objectName, body }));
    } else {
      debugger;
      props.dispatch(insertOne({ objectName, body }));
    }
  }

  function handleSaveAndClose() {
    handleSave();
    handleGoBack();
  }

  useEffect(() => {
    if (location.state && objectName) {
      debugger;
      props.handleDocumentSelected({ objectName, doc: location.state });
    }
  }, [location.state, objectName]);
  useEffect(() => {
    if (props && props.meta) {
      setObjectName(props.meta[0]);
    }
  }, [props.meta]);
  useEffect(() => {
    if (objectName && props && props.meta) {
      setMetaCollection(Object.entries(props.meta[1]));
    }
  }, [objectName, props]);
  return (
    <div className='detail-view'>
      {metaCollection &&
        metaCollection.map(m => {
          const name = m[0];
          const type = m[1].type;
          const placeholder = m[1].placeholder;

          return (
            <Input
              type={type}
              value={props.obj[name]}
              name={name}
              placeholder={placeholder}
              onChange={props.onChangeValue}
            />
          );
        })}

      <Editor onSave={handleSave} onSaveAndClose={handleSaveAndClose} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { meta } = ownProps;
  const objName = meta[0];
  const obj = state[objName];
  debugger;
  return {
    obj
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { meta, obj } = ownProps;
  const objectName = meta[0];
  debugger;
  return {
    dispatch,
    onChangeValue: e => {
      const { value, name } = e.target;

      dispatch(changeValue({ objectName, propName: name, value }));
    },

    handleDocumentSelected: ({ objectName, doc }) =>
      dispatch(documentSelected({ objectName, doc }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
