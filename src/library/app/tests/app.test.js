import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import store from '../../redux/store';
import { applicationStarted } from '../../redux/ui-reducer/uiActions';
import metaData from '../../mock-data/mockMetaData';
import getPropNames from '../../redux/ui-reducer/getPropNames';
import getObjectNames from '../../redux/ui-reducer/getObjectNames';

const objectName = 'employee';
const propNames = getPropNames({ objectName, metaData });
const objectNames = getObjectNames({ objectName, metaData });

describe('App', () => {
  it('initial state is set correctly', () => {
    store.dispatch(applicationStarted({ objectName, metaData }));

    expect(store.getState().ui).toEqual({
      objectName,
      propNames,
      objectNames,
      metaData
    });
  });

  it('User loaded application with navs and default listview', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App defaultObjectName={objectName} metaData={metaData} />
        </BrowserRouter>
      </Provider>
    );
    // navigations are visible
    expect(getByTestId('nav-employee')).toBeVisible();
    expect(getByTestId('nav-passport')).toBeVisible();
    expect(getByTestId('nav-visa')).toBeVisible();
    //navigation to employee list
    fireEvent.click(getByTestId('nav-employee'));
    // new Button is visible
    expect(getByTestId('new-employee')).toBeVisible();
    //Table columnd are visible
    expect(getByTestId('col-firstName')).toBeVisible();
    expect(getByTestId('col-lastName')).toBeVisible();
    expect(getByTestId('col-birthDate')).toBeVisible();
    expect(getByTestId('col-birthPlace')).toBeVisible();
  });

  it.only('User Clicked new button on employee listview', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App defaultObjectName={objectName} metaData={metaData} />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(getByTestId('nav-employee'));
    // new Button is visible on listview
    expect(getByTestId('new-employee')).toBeVisible();
    //user clicks new button
    fireEvent.click(getByTestId('new-employee'));
    //Detailview
    /*all fields in place*/
    expect(getByPlaceholderText(/Enter firstname/i));
    expect(getByPlaceholderText(/Enter lastname/i));
    expect(getByPlaceholderText(/Enter place of birth/i));
    expect(getByTestId(/date/i)).toHaveAttribute('name', 'birthDate');
    /*all editor buttons in place*/
    
  });
});
