import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import 'babel-polyfill';
import actionTypes from '../actionTypes';
import mockMetaData from '../mock-data/mockMetaData';
import { initState } from '../reducer';
import getPropNames from '../getPropNames';
const propNames = getPropNames({
  metaData: mockMetaData,
  objectName: 'employee'
});
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS', () => {
  it('valueChanged', () => {
    expect(
      actions.valueChanged({
        propName: 'firstName',
        value: 'dragos'
      })
    ).toEqual({
      type: actionTypes.VALUE_CHANGED,
      payload: { propName: 'firstName', value: 'dragos' }
    });
  });

  describe('FIND ACTION', () => {
    it(` handles ${actionTypes.FINDING_SUCCESS}`, done => {
      const store = mockStore({ todos: [] });
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          resolve({
            ok: true,
            status: 200,
            json: () => {
              return [{ _id: '1', firstName: 'dragos', lastName: 'mario' }];
            }
          });
        });
      });

      const expectedActions = [
        {
          type: 'FINDING_STARTED',
          payload: { propNames, objectName: 'employee', metaData: mockMetaData }
        },
        {
          payload: {
            data: [{ _id: '1', firstName: 'dragos', lastName: 'mario' }]
          },
          type: 'FINDING_SUCCESS'
        }
      ];

      return store
        .dispatch(
          actions.find({ objectName: 'employee', metaData: mockMetaData })
        )
        .then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it(`handles ${actionTypes.FINDING_FAILED}`, done => {
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          reject({ message: 'not found' });
        });
      });
      const store = mockStore({ todos: [] });
      const expectedActions = [
        {
          type: actionTypes.FINDING_STARTED,
          payload: { propNames, objectName: 'employee', metaData: mockMetaData }
        },
        {
          type: actionTypes.FINDING_FAILED,
          payload: { error: { message: 'not found' } }
        }
      ];
      return store
        .dispatch(
          actions.find({ objectName: 'employee', metaData: mockMetaData })
        )
        .then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('INSERT_ONE ACTION', () => {
    it(`handles ${actionTypes.INSERT_ONE_SUCCESS}`, done => {
      const obj = { firstName: 'dragos', lastName: 'mario' };
      const store = mockStore({
        crud: { ...initState, metaData: mockMetaData, obj }
      });
      const expectedActions = [
        { type: actionTypes.INSERT_ONE_STARTED },
        {
          type: actionTypes.INSERT_ONE_SUCCESS,
          payload: { _id: '1' }
        }
      ];
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          resolve({
            ok: true,
            status: 200,
            json: () => {
              return { _id: '1' };
            }
          });
        });
      });
      return store.dispatch(actions.insertOne()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
    it(`handles ${actionTypes.INSERT_ONE_FAILED}`, done => {
      const obj = { firstName: 'dragos', lastName: 'mario' };
      const store = mockStore({
        crud: { ...initState, metaData: mockMetaData, obj }
      });
      const expectedActions = [
        { type: actionTypes.INSERT_ONE_STARTED },
        {
          type: actionTypes.INSERT_ONE_FAILED,
          payload: { error: { message: 'insert failed' } }
        }
      ];
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          reject({ message: 'insert failed' });
        });
      });

      return store.dispatch(actions.insertOne()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
  });

  describe('UPDATE_ONE ACTION', () => {
    it(`handles ${actionTypes.UPDATE_ONE_SUCCESS}`, done => {
      const obj = { id: '1', firstName: 'dragos', lastName: 'mario' };
      const store = mockStore({
        crud: { ...initState, metaData: mockMetaData, obj }
      });

      const expectedActions = [
        { type: actionTypes.UPDATE_ONE_STARTED },
        { type: actionTypes.UPDATE_ONE_SUCCESS }
      ];
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          resolve({
            ok: true,
            status: 204,
            json: () => {
              return true;
            }
          });
        });
      });

      return store.dispatch(actions.updateOne()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
    it(`handles ${actionTypes.UPDATE_ONE_FAILED}`, done => {
      const obj = { id: '1', firstName: 'dragos', lastName: 'mario' };
      const store = mockStore({
        crud: { ...initState, metaData: mockMetaData, obj }
      });
      const expectedActions = [
        { type: actionTypes.UPDATE_ONE_STARTED },
        {
          type: actionTypes.UPDATE_ONE_FAILED,
          payload: { error: { message: 'update failed' } }
        }
      ];
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          reject({ message: 'update failed' });
        });
      });

      return store.dispatch(actions.updateOne()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
  });

  describe('DELETE_ONE ACTION', () => {
    it(`handles ${actionTypes.DELETE_ONE_SUCCESS}`, done => {
      const obj = { id: '1', firstName: 'dragos', lastName: 'mario' };
      const store = mockStore({
        crud: { ...initState, metaData: mockMetaData, obj }
      });
      const expectedActions = [
        { type: actionTypes.DELETE_ONE_STARTED },
        { type: actionTypes.DELETE_ONE_SUCCESS }
      ];

      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, response) => {
          resolve({
            ok: true,
            status: 204,
            json: () => {
              return true;
            }
          });
        });
      });

      return store.dispatch(actions.deleteOne()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });

    it(`handles ${actionTypes.DELETE_ONE_FAILED}`, done => {
      const obj = { id: '1', firstName: 'dragos', lastName: 'mario' };
      const store = mockStore({
        crud: { ...initState, metaData: mockMetaData, obj }
      });
      const expectedActions = [
        { type: actionTypes.DELETE_ONE_STARTED },
        {
          type: actionTypes.DELETE_ONE_FAILED,
          payload: { error: { message: 'deleting error' } }
        }
      ];

      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          reject({ message: 'deleting error' });
        });
      });
      return store.dispatch(actions.deleteOne()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
  });
});
