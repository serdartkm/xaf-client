import { createStore,applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer';
const loggerMiddleware = createLogger()
export default function initStore(initialState) {
  return createStore(reducer(initialState),  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ));
}
