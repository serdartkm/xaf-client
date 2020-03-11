import React from 'react';
import './css/style.css';
export default function ChangePassword({
  state,
  handleChange,
  handleChangePass
}) {
  return (
    <div data-testid='signupform' className='auth-form'>
    <fieldset>
      <legend>Change Password:</legend>
    
        <input
          value={state.password}
          type="password"
          data-testid="password"
          name="password"
          onChange={handleChange}
        />
        <input
          value={state.confirm}
          type="password"
          data-testid="confirm"
          name="confirm"
          onChange={handleChange}
        />
        <button
          type="button"
          data-testid="change-pass-btn"
          onClick={handleChangePass}
        >
          Change
        </button>

    </fieldset>
    </div>
  );
}
