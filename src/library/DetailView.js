import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createObject } from '../library/redux/actions';
import Input from './Input';
import './css/style.css';
function Editor({ onSave, onDelete, onCancel }) {
  return (
    <div className='editor'>
      <button className='btn' type='button' onClick={onSave}>
        Save
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
  useEffect(() => {
    if (props && props.meta) {
      debugger;
      setObjectName(props.meta[0]);
    }
  }, [props.meta]);
  useEffect(() => {
    if (objectName && props && props.meta) {
   
      debugger;
       setMetaCollection(Object.entries(props.meta[1]));
    }
  }, [objectName, props]);
  return (
    <div className='detail-view'>
      {metaCollection &&
        metaCollection.map(m => {
          debugger;
          const name = m[0];
          const value = m[1].value;
          const type = m[1].type;
          const placeholder = m[1].placeholder;
          return (
            <Input
              type={type}
              value={value}
              name={name}
              placeholder={placeholder}
            />
          );
        })}

      <Editor />
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
  const { objectName } = ownProps;
  return {
    createObject: dispatch(createObject(objectName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
