import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import useAuth from './useAuth';
import useValidation from './useValidation';
import Input from './Input';
import Form from './Form';
export default function Login() {
  const { handleChange, state, handleLogin } = useAuth();
  const { validateEmailConstraint, validateEmptyString } = useValidation();
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
          handleInputValidation={validateEmailConstraint}
          isValid={state.validation.email.isValid}
          errorMessage={state.validation.email.message}
        />

        <Input
          onChange={handleChange}
          name="password"
          value={state.password}
          type="password"
          placeholder="enter password"
          data-testid="password"
          handleInputValidation={validateEmptyString}
          isValid={state.validation.password.isValid}
          errorMessage={state.validation.password.message}
        />

        <button type="submit" data-testid="login-btn" onClick={handleLogin}>
          Login
        </button>

        <Link to="/requestpasschange">Forgot Password!</Link>
      </Form>
    </div>
  );
}
