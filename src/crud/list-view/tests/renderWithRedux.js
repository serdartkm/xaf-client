import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer, { initState } from '../../reducer';
import { render } from '@testing-library/react';
export default function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(combineReducers({ crud: reducer }), initialState)
  } = {}
) {
  const state = store.getState();
  debugger;
  return { ...render(<Provider store={store}>{component}</Provider>), store };
}
