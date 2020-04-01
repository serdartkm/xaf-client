import React from 'react';
import '@testing-library/jest-dom';
import { screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../Signup';
import { BrowserRouter } from 'react-router-dom';
import validationTypes from '../../form/validationTypes';
import validationStates from '../../form/validationStates';
import validationMessages from '../../form/validationMessages';
import renderWithRedux from './renderWithRedux';
import { initState } from '../reducer';
describe('Signup', () => {
  beforeEach(() => {
    cleanup();
    const { debug } = renderWithRedux(
      <BrowserRouter>
        <Signup />
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
    debug();
  });

  it('Signup form is rendered', () => {
    expect(screen.getByTestId(/username/i)).toBeVisible();
    expect(screen.getByTestId(/email/i)).toBeVisible();
    expect(screen.getByTestId(/password/i)).toBeVisible();
    expect(screen.getByTestId('signup-btn')).toBeVisible();
  });

  it('user enters username, email, password', () => {
    fireEvent.change(screen.getByTestId(/username/i), {
      target: { value: 'testname' }
    });
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'test@gmail.com' }
    });
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: 'Drasondle1977!_' }
    });
    fireEvent.blur(screen.getByTestId(/username/i));
    fireEvent.blur(screen.getByTestId(/email/i));
    fireEvent.blur(screen.getByTestId(/password/i));

    expect(screen.getByTestId(/username/i)).not.toHaveTextContent(
      validationMessages.INVALID_USERNAME
    );
    expect(screen.getByTestId(/email/i)).not.toHaveTextContent(
      validationMessages.INVALID_EMAIL
    );
    expect(screen.getByTestId(/password/i)).not.toHaveTextContent(
      validationMessages.INVALID_PASSWORD
    );
  }); //it

  it('user entered invalid username, email, password format', () => {
    fireEvent.change(screen.getByTestId(/username/i), {
      target: { value: '11111' }
    });
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'testgmail.co' }
    });
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: '' }
    });
    fireEvent.blur(screen.getByTestId(/username/i));
    fireEvent.blur(screen.getByTestId(/email/i));
    fireEvent.blur(screen.getByTestId(/password/i));
    expect(screen.getByTestId(/message-username/i)).toHaveTextContent(
      `* ${validationMessages.INVALID_USERNAME}`
    );
    expect(screen.getByTestId(/message-email/i)).toHaveTextContent(
      `* ${validationMessages.INVALID_EMAIL}`
    );
    expect(screen.getByTestId(/message-password/i)).toHaveTextContent(
      `* at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, Can contain special characters`
    );
  });

  it.only('user clicked signup without entering username, email, password', async () => {
    debugger;
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 400,
          json: () => {
            return [405, 406, 407];
          }
        });
      });
    });
    fireEvent.click(screen.getByText(/Signup/i));
    await waitFor(() => {
      screen.getByRole('message');
    });
  });
  it.todo('user clicked signup with invalid input username, email, password');
  it.todo('user clicked signup with valid username, email, password');
});
// it('username entered', () => {
//   fireEvent.change(screen.getByTestId(/username/i), {
//     target: { value: 'github' }
//   });
//   expect(screen.getByTestId(/username/i).value).toEqual('github');
// });
// it('email entered', () => {
//   fireEvent.change(screen.getByTestId(/email/i), {
//     target: { value: 'test@gmail.com' }
//   });
//   expect(screen.getByTestId(/email/i).value).toEqual('test@gmail.com');
// });
// it('password entered', () => {
//   fireEvent.change(screen.getByTestId(/password/i), {
//     target: { value: '123' }
//   });
//   expect(screen.getByTestId(/password/i).value).toEqual('123');
// });
// it('signup clicked', () => {
//   wait(()=>{
//     fireEvent.click(screen.getByTestId('signup-btn'));
//   })

// });
