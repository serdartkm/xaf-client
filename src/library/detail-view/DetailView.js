import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../input/Input';
import { valueChanged, insertOne } from '../redux/detail-reducer/detailActions';
import './css/style.css';

function Editor({ onSave, onSaveAndClose, onDelete, onCancel }) {
  return (
    <div className='editor'>
      <button
        data-testid='save-btn'
        className='btn'
        type='button'
        onClick={onSave}
      >
        Save
      </button>
      <button
        data-testid='save-close-btn'
        className='btn'
        type='button'
        onClick={onSaveAndClose}
      >
        Save And Close
      </button>
      <button
        data-testid='delete-btn'
        className='btn'
        type='button'
        onClick={onDelete}
      >
        Delete
      </button>
      <button
        data-testid='cancel-btn'
        className='btn'
        type='button'
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
}

export default function DetailView() {
  const appState = useSelector(state => state);
  const dispatch = useDispatch();

  const { fieldMetaData } = appState.detailUi;
  const { detail } = appState;
  const { objectName } = appState.ui;
  const history = useHistory();
  function handleGoBack() {
    history.goBack();
  }

  function handleSaveAndClose() {
    handleGoBack();
    handleSave();
  }

  function handleSave() {
    dispatch(insertOne({ objectName }));
  }
  function handleValueChange(e) {
    const { value, name } = e.target;

    dispatch(valueChanged({ propName: name, value }));
  }

  return (
    <div className='detail-view'>
      {fieldMetaData &&
        fieldMetaData.map(m => {
          const name = m.name;
          const type = m.type;
          const placeholder = m.placeholder;

          return (
            <Input
              key={name}
              type={type}
              value={detail[name]}
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
