import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import Input from '../form/Input';
import Button from '../form/Button';
import Form from '../form/Form';
import validationTypes from '../form/validationTypes';

export default function Login({ state, handleLogin, handleChange }) {
  return (
    <div data-testid="loginform" className="auth-form">
      <Form formTitle="Login">
        <Input
          onChange={handleChange}
          name="emailorusername"
          value={state.emailorusername}
          type="text"
          placeholder="Enter email or username"
          data-testid="emailOrUsername"
          validationTypes={[
            validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION,
            validationTypes.INVALID_CREDENTIALS
          ]}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={state.password}
          type="password"
          placeholder="enter password"
          data-testid="password"
          validationTypes={[
            validationTypes.EMPTY_STRING_VALIDATION,
            validationTypes.INVALID_CREDENTIALS
          ]}
        />

        <Button
          className="btn"
          type="button"
          data-testid="login-btn"
          onClick={handleLogin}
          title="Login"
        />
        <Link to="/requestpasschange">Forgot Password!</Link>
      </Form>
    </div>
  );
}
