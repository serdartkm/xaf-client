/* eslint-disable no-native-reassign */
import * as actions from '../actions';
import actionTypes from '../actionType';
import Store from './Store';
import actionType from '../actionType';
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

  it('handles LOGIN_SUCCESS', (done) => {
    const store = new Store();
    let expetedActions = [
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
    actions
      .login({
        email: 'tkm.house.new@gmail.com',
        password: '1234',
        dispatch: store.dispatch
      })
      .then(() => {
       
        expect(store.getActions()).toStrictEqual(expetedActions);
    done() 
    })

  });

  it('handle LOGIN_FAILED', (done) => {
    const store = new Store();
    let expectActions = [
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

    actions
      .login({
        email: 'tkm.house.new@gmail.com',
        password: '1234',
        dispatch: store.dispatch
      })
      .then(() => {
    
        expect(store.getActions()).toStrictEqual(expectActions);
    done()  
    })

  });
  it('handles SIGNUP_SUCCESS', (done) => {
    const store = new Store();

    const expdActions = [
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

    actions
      .signup({
        username: 'webapis',
        email: 'webapis.github@gmail.com',
        password: '123',
        dispatch: store.dispatch
      })
      .then(() => {
      
        const actions = store.getActions();

        expect(actions).toStrictEqual(expdActions);
        done()
      })
  });

  it('handle SIGNUP_FAILED', (done) => {
    const store = new Store();
    const expetedActions = [
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
    actions
      .signup({
        email: 'webapis.github@gmail.com',
        username: 'github',
        password: '1234',
        dispatch: store.dispatch
      })
      .then(() => {
        expect(store.getActions()).toStrictEqual(expetedActions);
    done() 
    })
  });
  it('handles CHANGE_PASSWORD SUCCESS ', (done) => {
    const store = new Store();
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
    const expetedActions = [
      { type: actionTypes.CHANGE_PASSWORD_STARTED },
      { type: actionTypes.CHANGE_PASSWORD_SUCCESS }
    ];
    actions
      .changePassword({
        password: '123',
        email: 'github@gmail.com',
        dispatch: store.dispatch
      })
      .then(() => {
        expect(store.getActions()).toStrictEqual(expetedActions);
   done()
    });
  });
  it('handle CHANGE_PASSWORD_FAILED', (done) => {
    const store = new Store();
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        reject({ message: 'the password is not strong enough' });
      });
    });
    const expectActions = [
      { type: actionTypes.CHANGE_PASSWORD_STARTED },
      {
        type: actionTypes.CHANGE_PASSWORD_FAILED,
        payload: { error: { message: 'the password is not strong enough' } }
      }
    ];
    actions
      .changePassword({
        email: 'github@gmail.com',
        password: '123',
        dispatch: store.dispatch
      })
      .then(() => {
        expect(store.getActions()).toStrictEqual(expectActions);
    done() 
    })
  });
  it('handles REQUEST_PASS_CHANGE_SUCCESS ', (done) => {
    const store = new Store();
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
    const expectActions = [
        { type: actionTypes.REQUEST_PASS_CHANGE_STARTED },
      { type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS }
    ];
    actions
      .requestPassChange({
        email: 'github@gmail.com',
        dispatch: store.dispatch
      })
      .then(() => {
        expect(store.getActions()).toStrictEqual(expectActions);
    done()  
    })
  });
});
