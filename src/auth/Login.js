import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
export default function Login({ handleLogin, handleChange, state }) {
  return (
    <div data-testid='loginform' className='auth-form'>
      <fieldset>
        <legend>Login:</legend>
        <input
          onChange={handleChange}
          name='email'
          value={state.email}
          type='email'
          placeholder='Enter email'
          data-testid='email'
        />

        <input
          onChange={handleChange}
          name='password'
          value={state.password}
          type='password'
          placeholder='enter password'
          data-testid='password'
        />

        <button type='button' data-testid='login-btn' onClick={handleLogin}>
          Login
        </button>

        <Link to='/requestpasschange'>Forgot Password!</Link>
      </fieldset>
    </div>
  );
}
