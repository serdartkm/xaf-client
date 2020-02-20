import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../Navigation';
import { BrowserRouter } from 'react-router-dom';
import CRUDContextProvider from '../../CRUDContext';
import { Provider } from 'react-redux';
import store from '../../redux/store';
describe('Navigation component', () => {
  it.only('All Links are displayed', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CRUDContextProvider>
            <Navigation />
          </CRUDContextProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(getByText(/employee/i)).toBeVisible();
    expect(getByText(/passport/i)).toBeVisible();
    expect(getByText(/visa/i)).toBeVisible();
  });
});
