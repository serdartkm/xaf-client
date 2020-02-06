import React from 'react';

function Editor({ onSave, onDelete, onCancel }) {
  return (
    <div>
      <button type="button" onClick={onSave}>
        Save
      </button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}


export default function({ meta, object }) {
  return <div></div>;
}
