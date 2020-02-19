import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../Navigation';
import { BrowserRouter } from 'react-router-dom';
import CRUDContextProvider from '../../CRUDContext';

describe('Navigation component', () => {
  it.only('All Links are displayed', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CRUDContextProvider
          columnNames={['firstName', 'lastName']}
          list={[{ firstName: 'Gurban', lastName: 'Jumyev' }]}
          objectName='employee'
          objectNames={['employee', 'passport', 'visa']}
        >
          <Navigation />
        </CRUDContextProvider>
      </BrowserRouter>
    );
    expect(getByText(/employee/i)).toBeVisible();
    expect(getByText(/passport/i)).toBeVisible();
    expect(getByText(/visa/i)).toBeVisible();
  });
});
