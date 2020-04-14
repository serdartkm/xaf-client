import React from 'react';

export default function Button({ onClick, title, disabled, id }) {
  return (
    <button
      data-testid={id}
      disabled={disabled}
      style={{ borderRadius: 2, height: 33 }}
      onClick={onClick}
    >
       {!disabled ? title: 'Wait...'}
    </button>
  );
}
