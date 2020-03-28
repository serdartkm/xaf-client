import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../input/Input';
import './css/style.css';

function Editor({ onSave, onSaveAndClose, deleteOne, onCancel }) {
  return (
    <div className='editor'>
      <button
        data-testid='save-btn'
        className='detail-btn'
        type='button'
        onClick={onSave}
      >
        Save
      </button>
      <button
        data-testid='save-close-btn'
        className='detail-btn'
        type='button'
        onClick={onSaveAndClose}
      >
        Save And Close
      </button>
      <button
        data-testid='delete-btn'
        className='detail-btn'
        type='button'
        onClick={deleteOne}
      >
        Delete
      </button>
      <button
        data-testid='close-btn'
        className='detail-btn'
        type='button'
        onClick={onCancel}
      >
        Close
      </button>
    </div>
  );
}

export default function DetailView({
  state,
  insertOne,
  updateOne,
  deleteOne,
  handleChange
}) {
  const history = useHistory();

  const { fields, obj, objectName } = state;

  function handleGoBack() {
    history.goBack();
  }

  function handleSaveAndClose() {
    handleGoBack();
    handleSave();
  }

  function handleSave() {
    if (obj._id) {
      updateOne();
    } else {
      insertOne();
    }
  }

  return (
    <div className='detail-view'>
      <div className='detail-editor-container'>
        <Editor
          onSave={handleSave}
          onSaveAndClose={handleSaveAndClose}
          deleteOne={deleteOne}
        />
      </div>
      <div className='detail-input-container'>
        <fieldset>
          <legend>{objectName}:</legend>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {fields &&
              fields.map(m => {
                const name = m.name;
                const type = m.type;
                const placeholder = m.placeholder;
                const source = m.source;
                return (
                  <Input
                    source={source}
                    defaultProperty={m.defaultProperty}
                    key={name}
                    type={type}
                    value={obj[name]}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                  />
                );
              })}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
