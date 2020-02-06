import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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

  useEffect(() => {
    if (props && props.objectName) {
      setMetaCollection(Object.entries(props[props.objectName]));
    }
  }, [props]);
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
  const { objectName } = ownProps;
  return {
    [objectName]: state[objectName]
  };
};

export default connect(mapStateToProps, null)(DetailView);
