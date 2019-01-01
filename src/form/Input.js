import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';
import validationStates from './validationStates';
import { isClientValidationType } from '../form/constraintValidators';
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
  value = '',
  validationTypes = []
}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [inputValidation, setInputValidation] = useState({
    validationState: validationStates.INACTIVE,
    message: ''
  });
  
  function registerValidation() {
    if (validationTypes.length > 0) {
      validationTypes.forEach(validationName => {
        if (state.form.validation && state.form.validation[validationName]) {
          const { validationState, message } = state.form.validation[
            validationName
          ];
          if (validationState) {
            setInputValidation({ validationState, message });
          }
        }
      });
    }
  }
  useEffect(() => {
    if (validationTypes.length > 0) {
      {
        registerValidation();
      }
    }
  }, [state, validationTypes]);

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
    setInputValidation({
      validationState: validationStates.INACTIVE,
      message: ''
    });
    validationTypes.forEach(validationType => {
      if (
        state.form &&
        state.form.validation &&
        state.form.validation[validationType]
      ) {
        dispatch(actions.resetInputValidationState({ validationType }));
      }
    });
  }
  function handleBlur() {
    if (validationTypes.length > 0) {
      validationTypes.forEach(validationType => {
      
        if (
          isClientValidationType({ validationType })
        ) {
          dispatch(actions.clientValidation({ validationType, value, state }));
        }
      });
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
