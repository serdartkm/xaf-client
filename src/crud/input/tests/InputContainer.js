import { useState } from 'react';

export default function InputContainer({ children, initState = '' }) {
  const [value, setValue] = useState(initState);
  function handleChange(e) {
  
    setValue(e.target.value);
  }
  function handleCheck(e) {
    setValue(e.target.checked);
  }
  return children({ value, handleChange, handleCheck });
}
