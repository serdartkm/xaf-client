import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/style.css';
import Input from '../form/Input';
import Form from '../form/Form';
import Button from '../form/Button';
import * as validationActions from '../form/actions';
import validationTypes from '../form/validationTypes';
export default function ChangePassword({
  state,
  handleChange,
  handleChangePass
}) {
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Change Passport">
        <Input
          value={state.password}
          type="password"
          data-testid="password"
          name="password"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORD_FORMAT_VALIDATION]}
        />
        <Input
          value={state.confirm}
          type="password"
          data-testid="confirm"
          name="confirm"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORDS_MATCH_VALIDATION]}
        />
        <Button
          type="button"
          data-testid="change-pass-btn"
          onClick={handleChangePass}
          title="Change"
        />
      </Form>
    </div>
  );
}
