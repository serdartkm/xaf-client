import React, { useState, useEffect } from 'react';

function ValidityIcon({ valid }) {
  return (
    <div
      style={{
        flex: 1,
        color: valid ? 'green' : 'red',
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
  handleInputValidation,
  isValid,
  errorMessage,
  resetConstraint
}) {
  const [validationActive, setValidationActive] = useState(false);
  const [borderColor, setBorderColor] = useState('');

useEffect(()=>{
if(!validationActive){
  resetConstraint(name)
}
},[validationActive])
  useEffect(() => {
    if (validationActive && isValid) {
      setBorderColor('green');
    }
    if (validationActive && !isValid && errorMessage.length > 0) {
      setBorderColor('red');
    }
    if (!validationActive) {
      setBorderColor('#4fc3f7');
    }
  }, [isValid, errorMessage, validationActive]);
  function handleFocus() {
   
    setValidationActive(false);
  
  }
  function handleBlur(e) {
    setValidationActive(true);
    handleInputValidation(e);
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
        {validationActive && <ValidityIcon valid={isValid} />}
      </div>
      {!isValid && errorMessage.length > 0 && (
        <div style={style.message}>*{errorMessage}</div>
      )}
    </div>
  );
}
