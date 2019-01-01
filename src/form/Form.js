import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as validationActions from './actions';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
};

export default function Form({ children, formTitle, error }) {
  return (
    <fieldset style={style}>
      <legend>{formTitle}:</legend>
      {children}
      {error && (
        <div
          style={{
            color: 'red',
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 5,
          }}
        >
          * {error.message}
        </div>
      )}
    </fieldset>
  );
}
