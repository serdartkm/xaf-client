import React, { useEffect, useState, useReducer } from 'react';
import useDetailState from './useDetailState';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Input from '../input/Input';
import './css/style.css';

function Editor({ onSave, onSaveAndClose, onDelete, onCancel }) {
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

export default function DetailView(props) {
  const reduxState = useSelector(state => state);
  const { valueChanged, state, handleSave } = useDetailState();
  const { propNames, propMetas } = reduxState;
  const history = useHistory();
  function handleGoBack() {
    history.goBack();
  }

  function handleSaveAndClose() {
    handleSave();
    handleGoBack();
  }

  function handleValueChange(e) {
    const { value, name } = e.target;
    debugger;
    valueChanged({ propName: name, value });
  }

  return (
    <div className='detail-view'>
      {propMetas &&
        propMetas.map(m => {
          debugger;
          const name = m[0];
          const type = m[1].type;
          const placeholder = m[1].placeholder;

          return (
            <Input
              type={type}
              value={state[name]}
              name={name}
              placeholder={placeholder}
              onChange={handleValueChange}
            />
          );
        })}

      <Editor onSave={handleSave} onSaveAndClose={handleSaveAndClose} />
    </div>
  );
}
