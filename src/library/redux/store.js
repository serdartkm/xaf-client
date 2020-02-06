import { createStore } from 'redux';

import reducer from './reducer';

export default function initStore(initialState) {
  return createStore(reducer(initialState));
}
