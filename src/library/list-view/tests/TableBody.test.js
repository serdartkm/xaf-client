import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableBody from '../TableBody';
import { BrowserRouter } from 'react-router-dom';
import CRUDContextProvider from '../../CRUDContext';
describe('TableBody component', () => {
  it('Generates  all required data', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TableBody
          columnNames={['firstName', 'lastName']}
          list={[{ firstName: 'Gurban', lastName: 'Jumyev' }]}
          objectName='employee'
        />
      </BrowserRouter>
    );
    expect(getByText(/Gurban/i)).toBeVisible();
    expect(getByText(/Jumyev/i)).toBeVisible();
  });
});
