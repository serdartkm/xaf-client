import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import Login from '../Login';
import renderWithRedux from '../../utils/renderWithRedux';
import reducer, { initState } from '../reducer';
describe('Login', () => {
  beforeEach(() => {
    renderWithRedux(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      { reducer: { auth: reducer }, initialState: initState }
    );
  });
  it.only('ui controls are visible', () => {
    expect(screen.queryByTestId(/email/i)).toBeVisible();
    expect(screen.queryByTestId(/password/i)).toBeVisible();
    expect(screen.queryByTestId('login-btn')).toBeVisible();
  });

  describe('user enters email and password', () => {
    it('user entered email', () => {
      debugger;
      fireEvent.change(screen.getByTestId(/email/i), {
        target: { value: 'webapis.github@gmail.com' }
      });
      expect(screen.getByTestId(/email/i).value).toBe(
        'webapis.github@gmail.com'
      );
    });

    it('user entered password', async () => {
      fireEvent.change(screen.getByTestId(/password/i), {
        target: { value: '12345' }
      });
      expect(screen.getByTestId(/password/i).value).toBe('12345');
    });

    it('user clicked login button', () => {
      wait(() => {
        fireEvent.click(screen.getByTestId('login-btn'));
      });
    });
  });
});
