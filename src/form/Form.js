import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 300
};

export default function Form({ children, formTitle }) {
  return (
    <fieldset style={style}>
      <legend>{formTitle}:</legend>
      {children}
    </fieldset>
  );
}
