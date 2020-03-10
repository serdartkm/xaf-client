import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from '../Table';
import { BrowserRouter } from 'react-router-dom';

describe('Table component', () => {
  beforeEach(() => {});
  it('Generates  all required column names and data', () => {
    render(
      <BrowserRouter>
        <Table
          propNames={['firstName', 'lastName']}
          list={[{ firstName: 'Gurban', lastName: 'Jumyev' }]}
          objectName='employee'
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/Gurban/i)).toBeVisible();
    expect(screen.getByText(/Jumyev/i)).toBeVisible();
    expect(screen.getByText(/firstName/i)).toBeVisible();
    expect(screen.getByText(/lastName/i)).toBeVisible();
  });
});
