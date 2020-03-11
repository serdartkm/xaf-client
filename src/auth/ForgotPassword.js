import React from 'react';
import './css/style.css';
export default function RequestPassChange({
  handleChange,
  state,
  handleRequestPassChange
}) {
  return (
    <div data-testid='signupform' className='auth-form'>
      <fieldset>
        <legend>Forgot Password:</legend>

        <input
          placeholder='email'
          name='email'
          value={state.email}
          onChange={handleChange}
          type='email'
          data-testid='email'
        />
        <button
          type='button'
          onClick={handleRequestPassChange}
          data-testid='requestpasschange-btn'
        >
          Send
        </button>
      </fieldset>
    </div>
  );
}
