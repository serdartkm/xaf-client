import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer';
import { render } from '@testing-library/react';
const loggerMiddleware = createLogger();
export default function renderWithRedux(component, initialState) {
  const localStore = createStore(combineReducers({ auth: reducer }), initialState,applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ));

  debugger;
  return { ...render(<Provider store={localStore}>{component}</Provider>) };
}