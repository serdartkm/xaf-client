import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../actions';
import types from '../actionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
  it('should create an action to to select and object name', () => {
    const objectName = 'employee';
    const propNames = [];
    const propMetas = [];
    const expectedAction = {
      type: types.SELECTED_OBJECT_NAME,
      payload: { objectName, propNames, propMetas }
    };
    expect(
      actions.selectedObjectName({ objectName, propNames, propMetas })
    ).toEqual(expectedAction);
  });

  it('creates FINDING_FULFILLED when fetching list has been done', () => {
    fetchMock.getOnce(`http://localhost:8000/find?document=employee`, {
      body: ['do something'],
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [
      { type: types.FINDING },
      { type: types.FINDING_FULFILLED, payload: { result: ['do something'] } }
    ];
    const store = mockStore({ list: [], objectName: 'employee' });
    return store.dispatch(actions.find()).then(() => {
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
      { type: types.FINDING },
      { type: types.FINDING_FAILED, error: new TypeError('Failed to fetch') }
    ];
    const store = mockStore({ list: [], objectName: 'employee' });
    return store.dispatch(actions.find()).then(() => {
      const actions = store.getActions();
 
      expect(actions).toEqual(expectedActions);
    });
  });
});
