import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import ForgotPassword from '../ForgotPassword';
import renderWithRedux from './renderWithRedux';
import { initState } from '../reducer';
import validationTypes from '../../form/validationTypes';
import validationStates from '../../form/validationStates';
import validationMessages from '../../form/validationMessages';
describe('ForgotPassword', () => {
  beforeEach(() => {
    cleanup();
    renderWithRedux(
      <BrowserRouter>
        <ForgotPassword />
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
  it('ForgotPassword form is rendered', () => {
    expect(screen.getByTestId('email')).toBeVisible();
    expect(screen.getByTestId('requestpasschange-btn')).toBeVisible();
  });

  it('user enters valid email', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'test@gmail.com' }
    });
    expect(screen.getByTestId(/email/i).value).toBe('test@gmail.com');
    fireEvent.blur(screen.getByTestId(/email/i));
    expect(screen.getByTestId(/email/i)).not.toHaveTextContent(
      validationMessages.INVALID_EMAIL
    );
  });
  it('user entered invalid email format', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'testgmail.com' }
    });

    fireEvent.blur(screen.getByTestId(/email/i));
    expect(screen.getByTestId(/message-email/i)).toHaveTextContent(
      validationMessages.INVALID_EMAIL
    );
  });
});
