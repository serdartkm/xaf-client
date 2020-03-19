import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/style.css';
import Input from '../form/Input';
import Form from '../form/Form';
import validationTypes from '../form/validationTypes';
import * as validationActions from '../form/actions';
export default function ChangePassword({
  state,
  handleChange,
  handleChangePass
}) {
  const dispatch = useDispatch();
  const authState = useSelector(state => state);
  const { confirm, password } = authState.auth;

  function validatePasswordMatch() {
    dispatch(
      validationActions.validatePasswordMatch({
        passwordValue: password,
        confirmValue: confirm,
        propName: 'confirm'
      })
    );
  }
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Change Passport">
        <Input
          value={state.password}
          type="password"
          data-testid="password"
          name="password"
          onChange={handleChange}
          validationType={validationTypes.PASSWORD}
        />
        <Input
          value={state.confirm}
          type="password"
          data-testid="confirm"
          name="confirm"
          onChange={handleChange}
          calculatedValidation={validatePasswordMatch}
        />
        <button
          type="button"
          data-testid="change-pass-btn"
          onClick={handleChangePass}
        >
          Change
        </button>
      </Form>
    </div>
  );
}
