import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from '../Table';
import { BrowserRouter } from 'react-router-dom';
import CRUDContextProvider from '../../CRUDContext';
describe('Table component', () => {
  it('Generates  all required column names and data', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CRUDContextProvider
          columnNames={['firstName', 'lastName']}
          list={[{ firstName: 'Gurban', lastName: 'Jumyev' }]}
          objectName='employee'
        >
          <Table />
        </CRUDContextProvider>
      </BrowserRouter>
    );
    expect(getByText(/Gurban/i)).toBeVisible();
    expect(getByText(/Jumyev/i)).toBeVisible();
    expect(getByText(/firstName/i)).toBeVisible();
    expect(getByText(/lastName/i)).toBeVisible();
  });
});
