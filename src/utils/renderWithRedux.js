import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
export default function renderWithRedux(
  component,
  {
    initialState,
    reducer,
    store = createStore(combineReducers({ ...reducer }), initialState)
  } = {}
) {
  debugger;
  return { ...render(<Provider store={store}>{component}</Provider>), store };
}
