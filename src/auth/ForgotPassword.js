import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../form/Input';
import Form from '../form/Form';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes';
import './css/style.css';
import useAuth from './useAuth';
export default function RequestPassChange() {
  const { handleChange, handleRequestPassChange } = useAuth();
  const state = useSelector(state => state);
  const { email } = state.auth;
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Forgot Password">
        <Input
          value={email}
          placeholder="email"
          name="email"
          onChange={handleChange}
          type="email"
          id="email"
          validationTypes={[
            validationTypes.EMAIL_FORMAT_VALIDATION,
            validationTypes.EMAIL_NOT_REGISTERED
          ]}
        />
        <Button
          className="btn"
          type="button"
          onClick={handleRequestPassChange}
          id="requestpasschange-btn"
          title="Send"
        />
      </Form>
    </div>
  );
}
