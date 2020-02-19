import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListView from '../ListView';
import { BrowserRouter } from 'react-router-dom';
import CRUDContextProvider from '../../CRUDContext';
describe('ListView component', () => {
  it('Generates ListView with required fields', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CRUDContextProvider
          columnNames={['firstName', 'lastName']}
          list={[{ firstName: 'Gurban', lastName: 'Jumyev' }]}
          objectName='employee'
        >
          <ListView />
        </CRUDContextProvider>
      </BrowserRouter>
    );
    expect(getByText(/Gurban/i)).toBeVisible();
    expect(getByText(/Jumyev/i)).toBeVisible();
    expect(getByText(/firstName/i)).toBeVisible();
    expect(getByText(/lastName/i)).toBeVisible();
    expect(getByText(/employee/i)).toBeVisible();
  });
});
