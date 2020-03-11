import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Input from '../input/Input';
import './css/style.css';

function Editor({ onSave, onSaveAndClose, onDelete, onCancel }) {
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
        onClick={onDelete}
      >
        Delete
      </button>
      <button
        data-testid='cancel-btn'
        className='detail-btn'
        type='button'
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
}

export default function DetailView({ state, createObject }) {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const { objectName } = params;
  // const { fields, obj } = state;
  useEffect(() => {
    if (location.state === 'new') {
      createObject({ objectName });
    }
  }, [location]);

  function handleGoBack() {
    history.goBack();
  }

  function handleSaveAndClose() {
    handleGoBack();
    handleSave();
  }

  function handleSave() {
    // dispatch(insertOne({ objectName }));
  }
  function handleValueChange(e) {
    const { value, name } = e.target;

    // dispatch(valueChanged({ propName: name, value }));
  }

  return (
    <div className='detail-view'>
      <div className='detail-editor-container'>
        <Editor onSave={handleSave} onSaveAndClose={handleSaveAndClose} />
      </div>
      <div className='detail-input-container'>

        <fieldset>
          <legend>{objectName}:</legend>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {state &&
              state.fields &&
              state.fields.map(m => {
                const name = m.name;
                const type = m.type;
                const placeholder = m.placeholder;

                return (
                  <Input
                    key={name}
                    type={type}
                    value={state.obj[name]}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleValueChange}
                  />
                );
              })}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
