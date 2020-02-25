import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import { applicationStarted } from '../../redux/ui-reducer/uiActions';
import { createObjectClicked } from '../../redux/detail-ui-reducer/detail-ui-action';
import mockMetaData from '../../mock-data/mockMetaData';
import DetailView from '../DetailView';

describe('DetailView', () => {
  it('Renders corrent fields', () => {
    store.dispatch(
      applicationStarted({ objectName: 'employee', metaData: mockMetaData })
    );
    store.dispatch(createObjectClicked({ objectName: 'employee' }));
    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailView />
        </BrowserRouter>
      </Provider>
    );

    expect(getByPlaceholderText(/Enter firstname/i)).toBeVisible();
    expect(getByPlaceholderText(/Enter lastname/i)).toBeVisible();
    expect(getByPlaceholderText(/Enter place of birth/i)).toBeVisible();
    expect(getByTestId('date')).toHaveAttribute('type', 'date');
    fireEvent.change(getByPlaceholderText(/Enter firstname/i), {
      target: { value: 'dragos' }
    });
    expect(getByPlaceholderText(/Enter firstname/i)).toHaveValue('dragos');
  });
});
