import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import Login from '../Login';
import renderWithRedux from './renderWithRedux';
import { initState } from '../reducer';
import validationTypes from '../../form/validationTypes';
import validationStates from '../../form/validationStates';
import validationMessages from '../../form/validationMessages';
describe('Login', () => {
  beforeEach(() => {
    cleanup();
    renderWithRedux(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      {
        auth: initState,
        form: {
          validation: {
            [validationTypes.USERNAME_OR_EMAIL_FORMAT_VALIDATION]: {
              validationState: validationStates.INACTIVE,
              message: ''
            }
          }
        }
      }
    );
  });
  it('Login form is rendered', () => {
    expect(screen.queryByTestId(/loginform/i)).toBeVisible();
    expect(screen.queryByTestId(/password/i)).toBeVisible();
    expect(screen.queryByTestId(/emailorusername/i)).toBeVisible();
    expect(screen.queryByTestId('login-btn')).toBeVisible();
  });

  it('user enters email and password', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'webapis.github@gmail.com' }
    });
    expect(screen.getByTestId(/email/i).value).toBe('webapis.github@gmail.com');
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: '12345' }
    });
    expect(screen.getByTestId(/password/i).value).toBe('12345');
  });

  it('user entered invalid emailorusername and password format', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: '1212' }
    });
    fireEvent.blur(screen.getByTestId(/email/i));
    expect(screen.getByTestId(/message-email/i)).toHaveTextContent(
      validationMessages.INVALID_USERNAME_OR_PASSWORD
    );

    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: '' }
    });
    fireEvent.blur(screen.getByTestId(/password/i));
    expect(screen.getByTestId(/message-password/i)).toHaveTextContent(
      validationMessages.INVALID_EMPTY_STRING
    );
  });
});

// describe('User clicked login btn', () => {
//   beforeEach(() => {
//     cleanup();
//     renderWithRedux(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>,
//       { auth: { ...initState, email: 'test@gmail.com', password: '1234' } }
//     );
//   });
// it('login success', () => {
//   global.fetch = jest.fn().mockImplementationOnce(() => {
//     return new Promise((resolve, reject) => {
//       resolve({
//         ok: true,
//         status: 200,
//         json: () => {
//           return { token: '12345' };
//         }
//       });
//     });
//   });
//   fireEvent.click(screen.getByTestId('login-btn'));
// });

// it.skip('login failed', () => {
//   global.fetch = jest.fn().mockImplementationOnce(() => {
//     return new Promise((resolve, reject) => {
//       resolve({
//         ok: true,
//         status: 200,
//         json: () => {
//           return { token: '12345' };
//         }
//       });
//     });
//   });
// });
