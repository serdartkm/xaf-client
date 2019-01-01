/* eslint-disable no-native-reassign */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import actionTypes from '../actionType';
import actionType from '../actionType';
import { initState } from '../reducer';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Action', () => {
  it('handles VALUE_CHANGE action', () => {
    expect(
      actions.valueChanged({
        propName: 'email',
        value: 'tkm.house.new@gmail.com'
      })
    ).toEqual({
      type: actionTypes.VALUE_CHANGED,
      payload: { value: 'tkm.house.new@gmail.com', propName: 'email' }
    });
  });

  it('handles LOGIN_SUCCESS', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    let expectedActions = [
      { type: actionTypes.LOGIN_STARTED },
      { type: actionTypes.LOGIN_SUCCESS }
    ];
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return [];
          }
        });
      });
    });
    return store.dispatch(actions.login()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('handle LOGIN_FAILED', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    let expectedActions = [
      { type: actionTypes.LOGIN_STARTED },
      {
        type: actionTypes.LOGIN_FAILED,
        payload: { error: { message: 'wrong credentials' } }
      }
    ];
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        reject({ message: 'wrong credentials' });
      });
    });

    return store.dispatch(actions.login()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('handles SIGNUP_SUCCESS', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    const expectedActions = [
      { type: actionTypes.SIGNUP_STARTED },
      { type: actionTypes.SIGNUP_SUCCESS }
    ];
    fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resove, reject) => {
        resove({
          ok: true,
          status: 200,
          json: () => {
            return [];
          }
        });
      });
    });

    return store.dispatch(actions.signup()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('handle SIGNUP_FAILED', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    const expectedActions = [
      { type: actionType.SIGNUP_STARTED },
      {
        type: actionTypes.SIGNUP_FAILED,
        payload: { error: { message: 'signup failed' } }
      }
    ];
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        reject({ message: 'signup failed' });
      });
    });
    return store.dispatch(actions.signup()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('handles CHANGE_PASSWORD SUCCESS ', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return [];
          }
        });
      });
    });
    const expectedActions = [
      { type: actionTypes.CHANGE_PASSWORD_STARTED },
      { type: actionTypes.CHANGE_PASSWORD_SUCCESS }
    ];
    return store.dispatch(actions.changePassword()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('handle CHANGE_PASSWORD_FAILED', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        reject({ message: 'the password is not strong enough' });
      });
    });
    const expectedActions = [
      { type: actionTypes.CHANGE_PASSWORD_STARTED },
      {
        type: actionTypes.CHANGE_PASSWORD_FAILED,
        payload: { error: { message: 'the password is not strong enough' } }
      }
    ];
    return store.dispatch(actions.changePassword()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('handles REQUEST_PASS_CHANGE_SUCCESS ', done => {
    const store = mockStore({ auth: { email: '', password: '' } });
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return [];
          }
        });
      });
    });
    const expectedActions = [
      { type: actionTypes.REQUEST_PASS_CHANGE_STARTED },
      { type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS }
    ];
    return store.dispatch(actions.requestPassChange()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
})

  
