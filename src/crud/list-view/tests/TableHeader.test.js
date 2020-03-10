import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableHeader from '../TableHeader';

describe('TableHeader component', () => {
  it('Generates  all required column names', () => {
 
    const { getByText } = render(
      <TableHeader columnNames={['firstName', 'lastName']} />
    );
    expect(getByText(/firstName/i)).toBeVisible();
    expect(getByText(/lastName/i)).toBeVisible();
    expect(getByText(/Edit/i)).toBeVisible();
    expect(getByText(/Delete/i)).toBeVisible();
  });
});
