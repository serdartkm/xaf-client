import React from 'react';
import './App.css';
import useFormControlState from './ui-components/form-controls/useFormControlState'
import TextInput from './ui-components/text-input/text-input'
function App() {
  const {onChange,state}= useFormControlState({path:"/",initialState:{firstname:"",lastname:""}})
  return (
    <div className="App">
      <TextInput  onChange={onChange} fieldName={"firstname"}/>
      <input onChange={onChange} value={state['lastname']} name="lastname"/>
    </div>
  );
}

export default App;
