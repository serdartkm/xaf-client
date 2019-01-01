import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, fireEvent, wait, cleanup } from '@testing-library/react';
import Login from '../Login';
import renderWithRedux from './renderWithRedux';
import { initState } from '../reducer';
describe('Login', () => {
  beforeEach(() => {
    cleanup();
  });
  it('ui controls are visible', () => {
    renderWithRedux(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      { auth: initState }
    );
    expect(screen.queryByTestId(/email/i)).toBeVisible();
    expect(screen.queryByTestId(/password/i)).toBeVisible();
    expect(screen.queryByTestId('login-btn')).toBeVisible();
  });

  describe('user enters email and password', () => {
    beforeEach(() => {
      renderWithRedux(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
        { auth: initState }
      );
    });
    it('user entered email', () => {
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
    describe('User clicked login btn', () => {
      beforeEach(() => {
        cleanup();
        renderWithRedux(
          <BrowserRouter>
            <Login />
          </BrowserRouter>,
          { auth: { ...initState, email: 'test@gmail.com', password: '1234' } }
        );
      });
      it('login success', () => {
        global.fetch = jest.fn().mockImplementationOnce(() => {
          return new Promise((resolve, reject) => {
            resolve({
              ok: true,
              status: 200,
              json: () => {
                return { token: '12345' };
              }
            });
          });
        });
        fireEvent.click(screen.getByTestId('login-btn'));
      });

      it.skip('login failed', () => {
        global.fetch = jest.fn().mockImplementationOnce(() => {
          return new Promise((resolve, reject) => {
            resolve({
              ok: true,
              status: 200,
              json: () => {
                return { token: '12345' };
              }
            });
          });
        });
      });
    });
  });
});
