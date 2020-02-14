import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { insertOne, changeValue } from '../library/redux/actions';
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

      <Editor onSave={props.handleSave} />
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
  const { meta } = ownProps;
  const objectName = meta[0];
  return {
    onChangeValue: e => {
      const { value, name } = e.target;

      dispatch(changeValue({ objectName, propName: name, value }));
    },
    handleSave: () => {
      debugger;
      dispatch(insertOne({ objectName, options: {} }))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
