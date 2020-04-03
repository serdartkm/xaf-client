import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import crudReducer from './crud/reducer';

import dropdownReducer from './crud/input/dropdown/reducer';
import authReducer from './auth/reducer';
import formReducer from './form/reducer';
const loggerMiddleware = createLogger();

export default createStore(
  combineReducers({
    crud: crudReducer,
    dropdown: dropdownReducer,
    auth: authReducer,
    form: formReducer
  }),

  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);
