import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableHeader from '../TableHeader';
import CRUDContextProvider from '../../CRUDContext';
describe('TableHeader component', () => {
  it('Generates  all required column names', () => {
    const { getByText } = render(
      <CRUDContextProvider columnNames={['firstName', 'lastName']}>
        <TableHeader />
      </CRUDContextProvider>
    );
    expect(getByText(/firstName/i)).toBeVisible();
    expect(getByText(/lastName/i)).toBeVisible();
    expect(getByText(/Edit/i)).toBeVisible();
    expect(getByText(/Delete/i)).toBeVisible();
  });
});
