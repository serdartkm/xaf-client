import React from 'react';
import { useSelector } from 'react-redux';
import validationStates from './validationStates';

export default function Button({ onClick, title }) {
  const state = useSelector(state => state);
  console.log("state",state)
  debugger
  return (
    <button
    disabled={state.form.validation && state.form.validation.formState!==validationStates.VALID}
      style={{ borderRadius: 2, height: 33 }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
