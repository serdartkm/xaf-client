import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import Input from '../form/Input';
import Form from '../form/Form';
import validationTypes from '../form/validationTypes';
export default function Login({ state, handleLogin, handleChange }) {
  return (
    <div data-testid="loginform" className="auth-form">
      <Form formTitle="Login">
        <Input
          onChange={handleChange}
          name="email"
          value={state.email}
          type="email"
          placeholder="Enter email"
          data-testid="email"
          validationType={validationTypes.EMAIL}
        />

        <Input
          onChange={handleChange}
          name="password"
          value={state.password}
          type="password"
          placeholder="enter password"
          data-testid="password"
          validationType={validationTypes.EMPTY_STRING}
        />

        <button
          className="btn"
          type="button"
          data-testid="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <Link to="/requestpasschange">Forgot Password!</Link>
      </Form>
    </div>
  );
}
