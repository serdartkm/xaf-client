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
  beforeEach(()=>{
    store.dispatch(
      applicationStarted({ objectName: 'employee', metaData: mockMetaData })
    );

  })
  it('New button on ListView clicked', () => {

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


  it('Update button has been clicked',()=>{
    //application started
    //employee list selected by default
    //listview fetches some data
    //user clicked edit button on listnew for  for editing specific user
    //user edites documents
    //user clickes update btn (update adn close btn)
    // when detailview closed and checkes whether data has been updated
    


  });


  it.todo('DetailView save button clicked');
});
