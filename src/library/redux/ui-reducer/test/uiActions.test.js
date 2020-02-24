import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { navigationChanges } from '../uiActions';
import uiActionTypes from '../uiActionTypes';
jest.mock('../../store');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActions', () => {
  it('handles NAVIGATION_CHANGED ACTION', () => {
    const expectedActions = [
      {
        type: uiActionTypes.NAVIGATION_CHANGED,
        objectName: 'employee',
        propNames: ['firstName', 'lastName', 'birthDate', 'birthPlace']
      }
    ];
    const store = mockStore({ objectName: null });
    store.dispatch(
      navigationChanges({
        objectName: 'employee'
      })
    );

    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });
});
