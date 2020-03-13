import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reducer from '../reducer';
export default function renderWithRedux(component, initialState) {
  const store = createStore(combineReducers({ auth: reducer }), {auth:initialState});
  const state = store.getState();
  debugger;
  return { ...render(<Provider store={store}>{component}</Provider>) };
}
