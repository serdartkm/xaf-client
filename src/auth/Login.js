import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
export default function Login({ handleLogin, handleChange, state }) {
  return (
    <div className="form-root">
      <div data-testid="loginform" className="auth-form">
        <input
          onChange={handleChange}
          name="email"
          value={state.email}
          type="text"
          placeholder="Enter email"
          data-testid="email"
        />

        <input
          onChange={handleChange}
          name="password"
          value={state.password}
          type="text"
          placeholder="enter password"
          data-testid="password"
        />

        <button type="button" data-testid="login-btn" onClick={handleLogin}>
          Login
        </button>

        <Link to="/requestpasschange">Forgot Password!</Link>
      </div>
    </div>
  );
}
