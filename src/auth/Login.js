import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/style.css';
import Input from '../form/Input';
import Button from '../form/Button';
import Form from '../form/Form';
import validationTypes from '../form/validationTypes';

import useAuth from './useAuth';
export default function Login() {
  const { handleChange, handleLogin } = useAuth();
  const state = useSelector(state => state);
  const { emailorusername, password } = state.auth;

  return (
    <div data-testid="loginform" className="auth-form">
      <Form formTitle="Login">
        <Input
          value={emailorusername}
          onChange={handleChange}
          name="emailorusername"
          type="text"
          placeholder="Enter email or username"
          id="emailOrUsername"
          validationTypes={[
            validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION,
            validationTypes.INVALID_CREDENTIALS
          ]}
        />

        <Input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="enter password"
          id="password"
          validationTypes={[
            validationTypes.EMPTY_STRING_VALIDATION,
            validationTypes.INVALID_CREDENTIALS
          ]}
        />

        <Button
          type="button"
          id="login-btn"
          onClick={handleLogin}
          title="Login"
        />
        <Link to="/requestpasschange">Forgot Password!</Link>
      </Form>
    </div>
  );
}
