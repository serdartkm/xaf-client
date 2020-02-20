import React from 'react';
import { render } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import '@testing-library/jest-dom/extend-expect';
import Table from '../Table';
import { BrowserRouter } from 'react-router-dom';
import CRUDContextProvider from '../../CRUDContext';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { findList } from '../../redux/list-reducer/listActions';
describe('Table component', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it.only('Generates  all required column names and data', () => {
    fetchMock.getOnce(`http://localhost:8000/find?document=employee`, {
      body: [{ firstName: 'Gurban', lastName: 'Jumyev' }],
      headers: { 'content-type': 'application/json' }
    });

    return store.dispatch(findList({ objectName: 'employee' })).then(() => {
      const { getByText } = render(
        <Provider store={store}>
          <BrowserRouter>
            <CRUDContextProvider>
              <Table />
            </CRUDContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(getByText(/Gurban/i)).toBeVisible();
      expect(getByText(/Jumyev/i)).toBeVisible();
      expect(getByText(/firstName/i)).toBeVisible();
      expect(getByText(/lastName/i)).toBeVisible();
    });
  });
});
