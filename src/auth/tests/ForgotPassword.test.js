import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent, wait } from '@testing-library/react';
import ForgotPassword from '../ForgotPassword';
import AuthProvider from '../AuthProvider';
describe('ForgotPassword', () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        {({ state, handleChange, handleRequestPassChange }) => {
          return (
            <ForgotPassword
              state={state}
              handleChange={handleChange}
              handleRequestPassChange={handleRequestPassChange}
            />
          );
        }}
      </AuthProvider>
    );
  });
  it('ui controls visible', () => {
    expect(screen.getByTestId('email')).toBeVisible();
    expect(screen.getByTestId('requestpasschange-btn')).toBeVisible();
  });

  it('enter email', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'test@gmail.com' }
    });
    expect(screen.getByTestId(/email/i).value).toEqual('test@gmail.com');
  });
  it('click requestchange btn', () => {
    wait(() => {
      fireEvent.click(screen.getByTestId(/requestpasschange/i));
    });
  });
});
