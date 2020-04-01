import React from 'react';
import { useSelector } from 'react-redux';
import './css/style.css';
import Input from '../form/Input';
import Form from '../form/Form';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes';
import useAuth from './useAuth';
export default function ChangePassword() {
  const { handleChange, handleChangePass } = useAuth();
  const state = useSelector(state => state);
  const { password, confirm } = state.auth;
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Change Passport">
        <Input
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORD_FORMAT_VALIDATION]}
        />
        <Input
          value={confirm}
          type="password"
          id="confirm"
          name="confirm"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORDS_MATCH_VALIDATION]}
        />
        <Button
          type="button"
          id="change-pass-btn"
          onClick={handleChangePass}
          title="Change"
        />
      </Form>
    </div>
  );
}
