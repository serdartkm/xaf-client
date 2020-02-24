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
  const appState = useSelector(state => state);
  //  const { valueChanged, state, handleSave } = useDetailState();
  const { fieldMetaData } = appState.detailUi;
  const { detail } = appState;
  const history = useHistory();
  function handleGoBack() {
    history.goBack();
  }

  function handleSaveAndClose() {
    //  handleSave();
    handleGoBack();
  }

  function handleValueChange(e) {
    const { value, name } = e.target;
    debugger;
    //   valueChanged({ propName: name, value });
  }

  return (
    <div className='detail-view'>
      {fieldMetaData &&
        fieldMetaData.map(m => {
          debugger;
          const name = m.name;
          const type = m.type;
          const placeholder = m.placeholder;

          return (
            <Input
              type={type}
              value={detail[name]}
              name={name}
              placeholder={placeholder}
              onChange={handleValueChange}
            />
          );
        })}

      <Editor onSave={null} onSaveAndClose={handleSaveAndClose} />
    </div>
  );
}
