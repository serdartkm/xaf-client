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
  const state = useSelector((state) => state);
  const { emailorusername, password, error, loading } = state.auth;

  return (
    <div data-testid='loginform' className='auth-form'>
      <Form formTitle='Login' error={error}>
        <Input
          value={emailorusername}
          onChange={handleChange}
          name='emailorusername'
          type='text'
          placeholder='Enter email or username'
          id='emailOrUsername'
          data-testid='emailOrUsername'
          validationTypes={[
            validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION,
            validationTypes.INVALID_CREDENTIALS,
            validationTypes.EMAIL_NOT_REGISTERED,
            validationTypes.USERNAME_NOT_REGISTERED,
          ]}
        />

        <Input
          value={password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='enter password'
          id='password'
          data-testid='password'
          validationTypes={[
            validationTypes.EMPTY_STRING_VALIDATION,
            validationTypes.INVALID_CREDENTIALS,
          ]}
        />

        <Button
          type='button'
          id='login-btn'
          data-testid='login-btn'
          onClick={handleLogin}
          title='Login'
          disabled={loading}
        />
        <Link to='/auth/requestpasschange'>Forgot Password!</Link>
      </Form>
    </div>
  );
}
