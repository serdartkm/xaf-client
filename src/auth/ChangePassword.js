import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/style.css';
import Input from '../form/Input';
import Form from '../form/Form';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes';
import useAuth from './useAuth';
import { getTokenFromUrl } from './actions';
export default function ChangePassword() {
  const dispatch = useDispatch();
  const { handleChange, handleChangePass } = useAuth();
  const state = useSelector(state => state);
  const { password, confirm, current, emailorusername, token } = state.auth;

  useEffect(() => {
    let url = new URL(window.location.href);
    var token = url.searchParams.get('token');
    if (token) {
      dispatch(getTokenFromUrl({ token }));
    }
    debugger;
  }, []);
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Change Password">
        {!token && (
          <Input
            value={emailorusername}
            type="text"
            id="emailorusername"
            name="emailorusername"
            placeholder="Enter email or username"
            onChange={handleChange}
            validationTypes={[
              validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION,
              validationTypes.INVALID_CREDENTIALS,
              validationTypes.EMAIL_NOT_REGISTERED,
              validationTypes.USERNAME_NOT_REGISTERED
            ]}
          />
        )}
        {!token && (
          <Input
            value={current}
            type="password"
            id="current"
            name="current"
            onChange={handleChange}
            placeholder="Enter current password"
            validationTypes={[
              validationTypes.EMPTY_STRING_VALIDATION,
              validationTypes.INVALID_CREDENTIALS
            ]}
          />
        )}

        <Input
          value={password}
          type="password"
          id="password"
          name="password"
          placeholder="Enter new password"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORD_FORMAT_VALIDATION]}
        />
        <Input
          value={confirm}
          type="password"
          id="confirm"
          name="confirm"
          placeholder="Confirm new password"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORDS_MATCH_VALIDATION]}
        />
        <Button
          type="button"
          id="change-pass-btn"
          data-testid="change-pass-btn"
          onClick={handleChangePass}
          title="Change"
        />
      </Form>
    </div>
  );
}
