import React from 'react';
import './App.css';
import useFormControlState from './ui-components/form-controls/useFormControlState'
function App() {
  const {onChange,state}= useFormControlState({path:"/",initialState:{firstname:"",lastname:""}})
  return (
    <div className="App">
      <input onChange={onChange} value={state['fisrtname']} name="firstname"/>
      <input onChange={onChange} value={state['lastname']} name="lastname"/>
    </div>
  );
}

export default App;
