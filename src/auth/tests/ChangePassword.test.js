import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import ChangePassword from '../ChangePassword';
import { initState } from '../reducer';
import validationTypes from '../../form/validationTypes';
import validationStates from '../../form/validationStates';
import validationMessages from '../../form/validationMessages';
import renderWithRedux from './renderWithRedux';
describe('ChangePassword', () => {
  beforeEach(() => {
    cleanup();
    renderWithRedux(
      <BrowserRouter>
        <ChangePassword />
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
  it('ChangePassword form is rendered', () => {
    expect(screen.getByTestId('password')).toBeVisible();
    expect(screen.getByTestId('confirm')).toBeVisible();
    expect(screen.getByTestId('change-pass-btn')).toBeVisible();
  });
  it('user enters valid new password and confirm', () => {
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: 'Dragosfly1988!' }
    });
    fireEvent.change(screen.getByTestId(/confirm/i), {
      target: { value: 'Dragosfly1988!' }
    });
    fireEvent.blur(screen.getByTestId(/password/i));
    fireEvent.blur(screen.getByTestId(/confirm/i));
    expect(screen.getByTestId(/password/i)).not.toHaveTextContent(
      validationMessages.INVALID_PASSWORD
    );
    expect(screen.getByTestId(/confirm/i)).not.toHaveTextContent(
      validationMessages.PASSWORDS_DO_NOT_MATCH
    );
  });
  it('user entered confirm do not match to password', () => {
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: 'Dragosfly1988!' }
    });
    fireEvent.change(screen.getByTestId(/confirm/i), {
      target: { value: 'Dragosfly1988' }
    });
    fireEvent.blur(screen.getByTestId(/password/i));
    fireEvent.blur(screen.getByTestId(/confirm/i));
    expect(screen.getByTestId(/password/i)).not.toHaveTextContent(
      validationMessages.INVALID_PASSWORD
    );
    expect(screen.getByTestId(/message-confirm/i)).toHaveTextContent(
      `* ${validationMessages.PASSWORDS_DO_NOT_MATCH}`
    );
  });
  it('user enters invalid password format', () => {
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: 'Dra' }
    });
    fireEvent.blur(screen.getByTestId(/password/i));

    expect(screen.getByTestId(/message-password/i)).toHaveTextContent(
      '* at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, Can contain special characters'
    );
  });

});
