import React from 'react';
import './css/style.css';
export default function Signup({ state, handleChange, handleSignup }) {
  return (
    <fieldset>
      <legend>Sign up:</legend>
      <div data-testid="signupform" className="auth-form">
        <input
          onChange={handleChange}
          value={state.username}
          type="text"
          data-testid="username"
          name="username"
          placeholder="username"
        />
        <input
          placeholder="email"
          type="email"
          data-testid="email"
          name="email"
        />
        <input
          placeholder="password"
          type="password"
          data-testid="password"
          name="password"
        />
        <button type="button" data-testid="signup-btn">
          Signup
        </button>
      </div>
    </fieldset>
  );
}
