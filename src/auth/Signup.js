import React from 'react';
import './css/style.css';
import Form from '../form/Form';
import Input from '../form/Input';
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
  
        />
        <Input
        
          onChange={handleChange}
          placeholder="email"
          type="email"
          data-testid="email"
          name="email"
          value={state.email}
         
        />
        <Input
        
          onChange={handleChange}
          placeholder="password"
          type="password"
          data-testid="password"
          name="password"
          value={state.password}
        
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
