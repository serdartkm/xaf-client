import React from 'react';
import './css/style.css';
import Input from '../form/Input';
import Form from '../form/Form';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes';
export default function ChangePassword({
  handleChange,
  handleChangePass
}) {
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Change Passport">
        <Input
          type="password"
          data-testid="password"
          name="password"
          onChange={handleChange}
          validationTypes={[validationTypes.PASSWORD_FORMAT_VALIDATION]}
        />
        <Input
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
