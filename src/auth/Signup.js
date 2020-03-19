import React from 'react';
import './css/style.css';
import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';
import validationTypes from '../form/validationTypes'
export default function Signup({
  state,
  handleChange,
  handleSignup
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
          validationType={validationTypes.USERNAME}
        />
        <Input
        
          onChange={handleChange}
          placeholder="email"
          type="email"
          data-testid="email"
          name="email"
          value={state.email}
          validationType={validationTypes.EMAIL}
        />
        <Input
        
          onChange={handleChange}
          placeholder="password"
          type="password"
          data-testid="password"
          name="password"
          value={state.password}
          validationType={validationTypes.PASSWORD}
        />
        <Button
          className="btn"
          type="button"
          onClick={handleSignup}
          data-testid="signup-btn"
          title="Signup"
        />
       
      </Form>
    </div>
  );
}
