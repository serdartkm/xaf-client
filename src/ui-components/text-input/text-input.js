import React from 'react';

export default function TextInput({ fieldName, onChange }) {
  return (
    <input type="text" value={fieldName} name={fieldName} onChange={onChange} />
  );
}
