import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import crudReducer from './crud/reducer';
import authReducer from './auth/reducer';
const loggerMiddleware = createLogger();
debugger;
export default createStore(
  combineReducers({ crud: crudReducer, auth: authReducer }),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);
