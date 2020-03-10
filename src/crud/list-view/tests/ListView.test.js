import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListView from '../../list-view/ListView';
import { BrowserRouter } from 'react-router-dom';
import CrudProvider from '../../CrudProvider';
describe('ListView component', () => {
  it.skip('Generates ListView with required fields', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CrudProvider>
          {({ state: { list, objectName, propNames } }) => {
            return (
              <ListView
                list={list}
                objectName={objectName}
                propNames={propNames}
              />
            );
          }}
        </CrudProvider>
      </BrowserRouter>
    );
    expect(getByText(/Gurban/i)).toBeVisible();
    expect(getByText(/Jumyev/i)).toBeVisible();
    expect(getByText(/firstName/i)).toBeVisible();
    expect(getByText(/lastName/i)).toBeVisible();
    expect(getByText(/employee/i)).toBeVisible();
  });
});
