import React from 'react';
import Input from '../form/Input';
import Form from '../form/Form';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes';
import './css/style.css';
export default function RequestPassChange({
  handleChange,
  state,
  handleRequestPassChange
}) {
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Forgot Password">
        <Input
          placeholder="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          type="email"
          data-testid="email"
          validationTypes={[
            validationTypes.EMAIL_FORMAT_VALIDATION,
            validationTypes.EMAIL_NOT_REGISTERED
          ]}
        />
        <Button
          className="btn"
          type="button"
          onClick={handleRequestPassChange}
          data-testid="requestpasschange-btn"
          title="Send"
        />
      </Form>
    </div>
  );
}
