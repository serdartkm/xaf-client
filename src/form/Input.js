import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';
import validationStates from './validationStates';

function ValidityIcon({ valid }) {
  let stateColor = '#4fc3f7';
  switch (valid) {
    case validationStates.VALID:
      stateColor = 'green';
      break;
    case validationStates.INVALID:
      stateColor = 'red';
      break;
    case validationStates.INACTIVE:
      stateColor = '#4fc3f7';
      break;
    default:
      stateColor = '#4fc3f7';
  }

  return (
    <div
      style={{
        flex: 1,
        color: stateColor,
        lineHeight: 2,
        width: 20,
        textAlign: 'center'
      }}
    >
      {valid ? '✓' : '☓'}
    </div>
  );
}

const style = {
  input: {
    margin: 1,
    border: '1px solid',
    padding: 8,
    flex: 10,
    borderRadius: 2
  },
  root: {
    borderRadius: 2,
    margin: 3,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    border: '1px solid white',
    marginBottom: 1
  },
  inputContainer: {
    display: 'flex',
    flex: 1
  },
  message: {
    color: 'red',
    paddingLeft: 3
  }
};
export default function Input({
  placeholder,
  type,
  name,
  onChange,
  value,
  validationType,
  calculatedValidation,
  serverValidationTypes = []
}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [inputValidation, setInputValidation] = useState({
    validationState: validationStates.INACTIVE,
    message: ''
  });

  function setServerInputValidation() {
    if (serverValidationTypes.length > 0) {
      serverValidationTypes.forEach(validationName => {
        if (state.form.serverValidation[validationName]) {
          const { validationState, message } = state.form.serverValidation[
            validationName
          ];
          setInputValidation({ validationState: validationState, message });
        }
      });
    }
  }
  useEffect(() => {
    if (state.form.validation && name && state.form.validation[name]) {
      const { validationState, message } = state.form.validation[name];
      setInputValidation({ validationState: validationState, message });
    }
    if (serverValidationTypes.length > 0 && state.form.serverValidation) {
      {
        setServerInputValidation();
      }
    }
  }, [state, name, serverValidationTypes]);

  const [borderColor, setBorderColor] = useState('');
  useEffect(() => {
    if (
      inputValidation &&
      inputValidation.validationState === validationStates.VALID
    ) {
      setBorderColor('green');
    }
    if (
      inputValidation &&
      inputValidation.validationState === validationStates.INVALID
    ) {
      setBorderColor('red');
    }
    if (
      inputValidation &&
      inputValidation.validationState === validationStates.INACTIVE
    ) {
      setBorderColor('#4fc3f7');
    }
  }, [inputValidation]);
  function handleFocus() {
    dispatch(actions.inputFocused({ propName: name }));
  }
  function handleBlur() {
    if (validationType) {
      dispatch(
        actions.validateInput({ propName: name, validationType, value })
      );
    }

    if (calculatedValidation) {
      calculatedValidation();
    }
  }

  return (
    <div style={style.root}>
      <div style={style.inputContainer}>
        <input
          style={{ ...style.input, borderColor }}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={handleBlur}
          placeholder={placeholder}
          onFocus={handleFocus}
        />
        {inputValidation &&
          (inputValidation.validationState === validationStates.INVALID ||
            inputValidation.validationState === validationStates.VALID) && (
            <ValidityIcon valid={inputValidation.validationState} />
          )}
      </div>
      {inputValidation.validationState === validationStates.INVALID && (
        <div style={style.message}>*{inputValidation.message}</div>
      )}
    </div>
  );
}
