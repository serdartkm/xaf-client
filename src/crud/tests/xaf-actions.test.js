import * as actions from '../actions';
import 'babel-polyfill';
import actionTypes from '../actionTypes';
import Store from './Store';
describe('ACTIONS', () => {
  const store = new Store();
  it('valueChanged', () => {
    actions.valueChanged({
      propName: 'firstName',
      value: 'dragos',
      dispatch: store.dispatch
    });

    expect(store.getActions()).toEqual([
      {
        type: actionTypes.VALUE_CHANGED,
        payload: { propName: 'firstName', value: 'dragos' }
      }
    ]);
  });

  describe('FIND ACTION', () => {
    it(` handles ${actionTypes.FINDING_SUCCESS}`, done => {
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
      const store = new Store();
      const expectedActions = [
        { type: 'FINDING_STARTED' },
        {
          payload: {
            data: [{ _id: '1', firstName: 'dragos', lastName: 'mario' }]
          },
          type: 'FINDING_SUCCESS'
        }
      ];
      actions
        .find({ objectName: 'employee', dispatch: store.dispatch })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectedActions);
          done();
        });
    });
    it(`handles ${actionTypes.FINDING_FAILED}`, done => {
      global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
          reject({ message: 'not found' });
        });
      });
      const store = new Store();
      const expectedActions = [
        { type: actionTypes.FINDING_STARTED },
        {
          type: actionTypes.FINDING_FAILED,
          payload: { error: { message: 'not found' } }
        }
      ];
      actions
        .find({ objectName: 'employee', dispatch: store.dispatch })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectedActions);
          done();
        });
    });
  });

  describe('INSERT_ONE ACTION', () => {
    it(`handles ${actionTypes.INSERT_ONE_SUCCESS}`, done => {
      const store = new Store();
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
      actions
        .insertOne({
          objectName: 'employee',
          dispatch: store.dispatch,
          payload: { id: '1', firstName: 'dragos', lastName: 'mario' }
        })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectedActions);
          done();
        });
    });
    it(`handles ${actionTypes.INSERT_ONE_FAILED}`, done => {
      const store = new Store();
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

      actions
        .insertOne({
          objectName: 'employee',
          dispatch: store.dispatch,
          payload: { id: '1', firstName: 'dragos', lastName: 'mario' }
        })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectedActions);
          done();
        });
    });
  });

  describe('UPDATE_ONE ACTION', () => {
    it(`handles ${actionTypes.UPDATE_ONE_SUCCESS}`, done => {
      const store = new Store();
      const obj = { id: '1', firstName: 'dragos', lastName: 'mario' };
      const expectActions = [
        { type: actionTypes.UPDATE_ONE_STARTED },
        { type: actionTypes.UPDATE_ONE_SUCCESS, payload: { object: obj } }
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

      actions
        .updateOne({
          objectName: 'employee',
          dispatch: store.dispatch,
          object: obj
        })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectActions);
          done();
        });
    });
    it(`handles ${actionTypes.UPDATE_ONE_FAILED}`, done => {
      const store = new Store();
      const expectActions = [
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

      actions
        .updateOne({
          objectName: 'employee',
          dispatch: store.dispatch,
          object: {}
        })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectActions);
          done();
        });
    });
  });

  describe('DELETE_ONE ACTION', () => {
    it(`handles ${actionTypes.DELETE_ONE_SUCCESS}`, done => {
      const store = new Store();
      const expectedActions = [
        { type: actionTypes.DELETE_ONE_STARTED },
        { type: actionTypes.DELETE_ONE_SUCCESS, payload: { _id: '1' } }
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

      actions
        .deleteOne({
          objectName: 'employee',
          dispatch: store.dispatch,
          _id: '1'
        })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectedActions);
          done();
        });
    });

    it(`handles ${actionTypes.DELETE_ONE_FAILED}`, done => {
      const store = new Store();
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
      actions
        .deleteOne({
          objectName: 'employee',
          dispatch: store.dispatch,
          _id: '1'
        })
        .then(() => {
          expect(store.getActions()).toStrictEqual(expectedActions);
          done();
        });
    });
  });
});
