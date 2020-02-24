import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../Navigation';
import { BrowserRouter } from 'react-router-dom';
import { applicationStarted } from '../../redux/ui-reducer/uiActions';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import mockMetaData from '../../mock-data/mockMetaData';
debugger;

describe('Navigation component', () => {
  it.only('All Links are displayed', () => {
    store.dispatch(
      applicationStarted({
        objectName: 'employee',
        metaData: mockMetaData
      })
    );

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText(/employee/i)).toBeVisible();
    expect(getByText(/passport/i)).toBeVisible();
    expect(getByText(/visa/i)).toBeVisible();
  });
});
