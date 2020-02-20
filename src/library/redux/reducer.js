import { combineReducers } from 'redux';
import listReducer from './list-reducer/listReducer';
import uiReducer from './ui-reducer/uiReducer';
export default combineReducers({ list: listReducer, ui: uiReducer });
