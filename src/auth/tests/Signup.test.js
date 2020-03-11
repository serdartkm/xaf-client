import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent, wait } from '@testing-library/react';
import Signup from '../Signup';
import AuthProvider from '../AuthProvider';
describe('Signup', () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        {({ handleChange, handleSignup, state }) => {
          return (
            <Signup
              handleChange={handleChange}
              state={state}
              handleSignup={handleSignup}
            />
          );
        }}
      </AuthProvider>
    );
  });

  it('ui controls are visible', () => {
    expect(screen.getByTestId(/username/i)).toBeVisible();
    expect(screen.getByTestId(/email/i)).toBeVisible();
    expect(screen.getByTestId(/password/i)).toBeVisible();
    expect(screen.getByTestId('signup-btn')).toBeVisible();
  });

  it('username entered', () => {
    fireEvent.change(screen.getByTestId(/username/i), {
      target: { value: 'github' }
    });
    expect(screen.getByTestId(/username/i).value).toEqual('github');
  });
  it('email entered', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'test@gmail.com' }
    });
    expect(screen.getByTestId(/email/i).value).toEqual('test@gmail.com');
  });
  it('password entered', () => {
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: '123' }
    });
    expect(screen.getByTestId(/password/i).value).toEqual('123');
  });
  it('signup clicked', () => {
    wait(()=>{
      fireEvent.click(screen.getByTestId('signup-btn'));
    })
  
  });
});
