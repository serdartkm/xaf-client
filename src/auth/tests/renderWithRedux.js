import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import auth from '../reducer';
import form from '../../form/reducer';
import { render } from '@testing-library/react';
const loggerMiddleware = createLogger();
export default function renderWithRedux(component, initialState) {

  const localStore = createStore(
    combineReducers({ auth, form }),
    initialState,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    //  loggerMiddleware // neat middleware that logs actions
    )
  );


  return { ...render(<Provider store={localStore}>{component}</Provider>) };
}
