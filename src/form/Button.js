import React from 'react';

export default function Button({ onClick, title,disabled }) {


 

  return (
    <button
      disabled={disabled}
      style={{ borderRadius: 2, height: 33 }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
