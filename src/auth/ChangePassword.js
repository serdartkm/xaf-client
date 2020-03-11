import React from 'react';
import './css/style.css';
export default function ChangePassword({
  state,
  handleChange,
  handleChangePass
}) {
  return (
    <fieldset>
      <legend>Change Password:</legend>
      <div data-testid="changepassform" className="auth-form">
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
      </div>
    </fieldset>
  );
}
