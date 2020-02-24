import { combineReducers } from 'redux';
import listReducer from './list-reducer/listReducer';
import uiReducer from './ui-reducer/uiReducer';
import detailUiReducer from './detail-ui-reducer/detail-ui-reducer';
import detailReducer from './detail-reducer/detailReducer';
export default combineReducers({
  list: listReducer,
  ui: uiReducer,
  detailUi: detailUiReducer,
  detail: detailReducer
});
