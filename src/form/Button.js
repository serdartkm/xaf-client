import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import validationStates from './validationStates';

export default function Button({ onClick, title }) {
  const state = useSelector(state => state);

  const [inputFormState, setInputFormState] = useState(
    validationStates.INACTIVE
  );

  useEffect(() => {
    if (state.form.validation) {
      
      const {formState} = state.form.validation;

      setInputFormState(formState);
    }
  }, [state]);

  return (
    <button
      disabled={inputFormState !== validationStates.VALID}
      style={{ borderRadius: 2, height: 33 }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
