import React from 'react';
import { useSelector } from 'react-redux';
import './css/style.css';
import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes';
import useAuth from './useAuth';
export default function Signup() {
  const { handleChange, handleSignup } = useAuth();
  const state = useSelector((state) => state);
  const { username, password, email, error,loading } = state.auth;
  return (
    <div data-testid='signupform' className='auth-form'>
      <Form formTitle='Sign up' error={error}>
        <Input
          value={username}
          onChange={handleChange}
          type='text'
          id='username'
          name='username'
          placeholder='username'
          validationTypes={[
            validationTypes.USERNAME_FORMAT_VALIDATION,
            validationTypes.USERNAME_TAKEN,
          ]}
        />
        <Input
          onChange={handleChange}
          value={email}
          placeholder='email'
          type='email'
          id='email'
          name='email'
          validationTypes={[
            validationTypes.EMAIL_FORMAT_VALIDATION,
            validationTypes.REGISTERED_EMAIL,
          ]}
        />
        <Input
          onChange={handleChange}
          value={password}
          placeholder='password'
          type='password'
          id='password'
          name='password'
          validationTypes={[validationTypes.PASSWORD_FORMAT_VALIDATION]}
        />
        <Button
          className='btn'
          type='button'
          onClick={handleSignup}
          id='signup-btn'
          title='Signup'
          disabled={loading}
        />
      </Form>
    </div>
  );
}
