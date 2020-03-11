import React from 'react';
import './css/style.css'
export default function RequestPassChange({handleChange,state,handleRequestPassChange}) {
  return (
    <fieldset>

  <legend>Forgot Password:</legend>
    <div data-testid="requestchangepassform"  className="auth-form">
      <input placeholder="email" name="email" value={state.email} onChange={handleChange} type="email" data-testid="email" />
      <button type="button" onClick={handleRequestPassChange} data-testid="requestpasschange-btn">Request password Change</button>
    </div>
    </fieldset>
  );
}
