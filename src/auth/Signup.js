import React from 'react';
import './css/style.css';
import Form from './Form';
import Input from './Input';
export default function Signup({
  state,
  handleChange,
  handleSignup,
  validateEmailConstraint,
  validateUserNameConstraint,
  validatePasswordConstraint
}) {
  return (
    <div data-testid="signupform" className="auth-form">
      <Form formTitle="Sign up">
        <Input
          onChange={handleChange}
          value={state.username}
          type="text"
          data-testid="username"
          name="username"
          placeholder="username"
          handleInputValidation={validateUserNameConstraint}
          isValid={state.validation.username.isValid}
          errorMessage={state.validation.username.message}
        />
        <Input
          placeholder="email"
          type="email"
          data-testid="email"
          name="email"
          handleInputValidation={validateEmailConstraint}
          isValid={state.validation.email.isValid}
          errorMessage={state.validation.email.message}
        />
        <Input
          placeholder="password"
          type="password"
          data-testid="password"
          name="password"
          handleInputValidation={validatePasswordConstraint}
          isValid={state.validation.password.isValid}
          errorMessage={state.validation.password.message}
        />
        <button
          className="btn"
          type="button"
          onClick={handleSignup}
          data-testid="signup-btn"
        >
          Signup
        </button>
      </Form>
    </div>
  );
}
