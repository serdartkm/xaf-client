import React, { Suspense } from 'react';
import {
  render,
  screen,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Authentication from '../Authentication';
import { BrowserRouter, Link } from 'react-router-dom';

describe('Authentication', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <div>
          <Link data-testid="nav-login" to="/login">
            Login
          </Link>
          <Link data-testid="nav-signup" to="/signup">
            Signup
          </Link>
          <Link data-testid="nav-changepass" to="/changepassword">
            Change Password
          </Link>
          <Link data-testid="nav-requestchangepass" to="/requestpasschange">
            Request Change Password
          </Link>
          
          <Suspense fallback={<div>loading</div>}>
            <Authentication />
          </Suspense>
        </div>
      </BrowserRouter>
    );
  });
  it.only('navigate to login', async () => {
    fireEvent.click(screen.getByTestId(/nav-login/i));
    const lazyload = await waitForElement(() =>
      screen.getByTestId(/loginform/i)
    );
    await expect(lazyload).toBeInTheDocument();
  });

  it('navigate to signup', async () => {
    fireEvent.click(screen.getByTestId(/nav-signup/i));
    const lazyload = await waitForElement(() =>
      screen.getByTestId(/signupform/i)
    );
    await expect(lazyload).toBeInTheDocument();
  });

  it('navigate to change password', async () => {
    fireEvent.click(screen.getByTestId(/nav-changepass/i));
    const lazyload = await waitForElement(() =>
      screen.getByTestId(/changepassform/i)
    );
    await expect(lazyload).toBeInTheDocument();
  });
  it('navigate to request change password', async () => {
    fireEvent.click(screen.getByTestId(/nav-requestchangepass/i));
    const lazyload = await waitForElement(() =>
      screen.getByTestId(/requestchangepassform/i)
    );
    await expect(lazyload).toBeInTheDocument();
  });
});
