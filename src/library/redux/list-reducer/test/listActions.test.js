import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../listActions';
import types from '../listActionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FINDING_FULFILLED when fetching list has been done', () => {
    fetchMock.getOnce(`http://localhost:8000/find?document=employee`, {
      body: ['do something'],
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [
      { type: types.FINDING_LIST },
      {
        type: types.FINDING_LIST_FULFILLED,
        payload: { result: ['do something'] }
      }
    ];
    const store = mockStore({ list: [] });
    return store
      .dispatch(actions.findList({ objectName: 'employee' }))
      .then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
      });
  });

  it('creates FINDING_FAILED when fetching list has failed', () => {
    fetchMock.getOnce(`http://localhost:8000/find?document=employee`, {
      throws: new TypeError('Failed to fetch'),
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [
      { type: types.FINDING_LIST },
      {
        type: types.FINDING_LIST_FAILED,
        error: new TypeError('Failed to fetch')
      }
    ];
    const store = mockStore({ list: [] });
    return store
      .dispatch(actions.findList({ objectName: 'employee' }))
      .then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
      });
  });
});
