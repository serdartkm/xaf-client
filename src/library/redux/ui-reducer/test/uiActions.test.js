import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { navigationChanges } from '../uiActions';
import uiActionTypes from '../uiActionTypes';
import mockMetaData from '../../../mock-data/mockMetaData';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActions', () => {
  it.only('handles NAVIGATION_CHANGED action', () => {
    const expectedActions = [
      {
        type: uiActionTypes.NAVIGATION_CHANGED,
        objectName: 'employee',
        propNames: ['firstName', 'lastName', 'birthDate','birthPlace', ]
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
