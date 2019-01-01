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
  debugger;
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
  validationType
}) {
  useEffect(() => {
    dispatch(actions.initValidationState({ propName: name }));
  }, []);
  const state = useSelector(state => state);
  const validationState =
    state.form.validation && state.form.validation[name].validationState;
  const message = state.form.validation && state.form.validation[name].message;
  debugger;
  const dispatch = useDispatch();
  const [borderColor, setBorderColor] = useState('');
  useEffect(() => {
    if (validationState && validationState === validationStates.VALID) {
      setBorderColor('green');
    }
    if (validationState && validationState === validationStates.INVALID) {
      setBorderColor('red');
    }
    if (validationState && validationState === validationStates.INACTIVE) {
      setBorderColor('#4fc3f7');
    }
  }, [validationState]);
  function handleFocus() {
    dispatch(actions.inputFocused({ propName: name }));
  }
  function handleBlur() {
    dispatch(actions.validateInput({ propName: name, validationType, value }));
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
        {validationState && ((validationState===validationStates.INVALID)||(validationState===validationStates.VALID))
          && (
            <ValidityIcon valid={validationState} />
          )}
      </div>
      {validationState && validationState === validationStates.INVALID && (
        <div style={style.message}>*{message}</div>
      )}
    </div>
  );
}
