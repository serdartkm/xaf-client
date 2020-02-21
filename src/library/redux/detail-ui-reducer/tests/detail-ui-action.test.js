import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addNewObjectClicked } from '../detail-ui-action';
import detailUiActionTypes from '../detail-ui-actionTypes';
import mockMetaData from '../../../mock-data/mockMetaData';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActions', () => {
    it.only('handles NAVIGATION_CHANGED action', () => {
      const expectedActions = [
        {
          type: detailUiActionTypes.ADD_NEW_OBJECT_CLICKED,
          payload:{ firstName:'',lastName:'',birthPlace:'',birth}
        }
      ];
      const store = mockStore({ objectName: null });
      store.dispatch(
        navigationChanges({
          objectName: 'employee',
          metaData: mockMetaData
        })
      );
  
      const actions = store.getActions();
     
      expect(actions).toEqual(expectedActions);
    });
  });