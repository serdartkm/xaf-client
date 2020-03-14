import React, { useState, useEffect } from 'react';

export default function DataSetEditor({ propName, updateState }) {
  const [value, setValue] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!edit) {
      if (value && value.length > 0) {
        updateState({ propName, value });
      }
    }
  }, [edit, propName, updateState, value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleBlur() {
    setEdit(false);
  }

  return (
    <div>
      {' '}
      <input
        value={value}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
