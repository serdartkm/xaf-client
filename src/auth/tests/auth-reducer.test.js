import reducer, { initState } from '../reducer';

import actionTypes from '../actionType';
describe('Reducer', () => {
  it(`handles ${actionTypes.VALUE_CHANGED}`, () => {
    const currentState = { ...initState };
    expect(
      reducer(currentState, {
        type: actionTypes.VALUE_CHANGED,
        payload: { propName: 'email', value: 'test@gmail.com' }
      })
    ).toStrictEqual({ ...currentState, email: 'test@gmail.com' });
  });

  it(`handles ${actionTypes.LOGIN_STARTED}`, () => {
    const currentState = { ...initState };
    expect(
      reducer(currentState, { type: actionTypes.LOGIN_STARTED })
    ).toStrictEqual({ ...currentState, loading: true });
  });
  it(`handles ${actionTypes.LOGIN_SUCCESS}`, () => {
    const currentState = { ...initState, loading: true };
    expect(reducer(currentState, { type: actionTypes.LOGIN_SUCCESS })).toEqual({
      ...currentState,
      success: true,
      loading: false
    });
  });
  it(`handles ${actionTypes.LOGIN_FAILED}`, () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, {
        type: actionTypes.LOGIN_FAILED,
        payload: { error: { message: 'login error' } }
      })
    ).toStrictEqual({
      ...currentState,
      loading: false,
      error: { message: 'login error' }
    });
  });

  it(`handles ${actionTypes.SIGNUP_STARTED}`, () => {
    const currentState = { ...initState };

    expect(
      reducer(currentState, { type: actionTypes.SIGNUP_STARTED })
    ).toStrictEqual({ ...currentState, loading: true });
  });
  it(`handles ${actionTypes.SIGNUP_SUCCESS}`, () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, { type: actionTypes.SIGNUP_SUCCESS })
    ).toStrictEqual({ ...currentState, loading: false, success: true });
  });
  it(`handles ${actionTypes.SIGNUP_FAILED}`, () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, {
        type: actionTypes.SIGNUP_FAILED,
        payload: { error: { message: 'signup error' } }
      })
    ).toStrictEqual({
      ...currentState,
      loading: false,
      error: { message: 'signup error' }
    });
  });

  it(`handles ${actionTypes.CHANGE_PASSWORD_STARTED}`, () => {
    const currentState = { ...initState };
    expect(
      reducer(currentState, { type: actionTypes.CHANGE_PASSWORD_STARTED })
    ).toStrictEqual({ ...currentState, loading: true });
  });
  it(`handles ${actionTypes.CHANGE_PASSWORD_SUCCESS}`, () => {
    const currentState = { ...initState, loading: false };
    expect(
      reducer(currentState, { type: actionTypes.CHANGE_PASSWORD_SUCCESS })
    ).toStrictEqual({ ...currentState, loading: false, success: true });
  });
  it(`handles ${actionTypes.CHANGE_PASSWORD_FAILED}`, () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, {
        type: actionTypes.CHANGE_PASSWORD_FAILED,
        payload: { error: { message: 'password changeing error' } }
      })
    ).toStrictEqual({
      ...currentState,
      loading: false,
      error: { message: 'password changeing error' }
    });
  });

  it(`handles ${actionTypes.REQUEST_PASS_CHANGE_STARTED}`, () => {
    const currentState = { ...initState };
    expect(
      reducer(currentState, { type: actionTypes.REQUEST_PASS_CHANGE_STARTED })
    ).toEqual({ ...currentState, loading: true });
  });
  it(`handles ${actionTypes.REQUEST_PASS_CHANGE_SUCCESS}`, () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, { type: actionTypes.REQUEST_PASS_CHANGE_SUCCESS })
    ).toStrictEqual({ ...currentState, loading: false, success: true });
  });
  it(`handles ${actionTypes.REQUEST_PASS_CHANGE_FAILED}`, () => {
    const currentState = { ...initState, loading: true };
    expect(
      reducer(currentState, {
        type: actionTypes.REQUEST_PASS_CHANGE_FAILED,
        payload: { error: { message: 'request pass change error' } }
      })
    ).toStrictEqual({
      ...currentState,
      loading: false,
      error: { message: 'request pass change error' }
    });
  });

  describe('validatePasswordConstraint', () => {
    it(`${actionTypes.PASSWORD_CONSTRAINT_VALID}`, () => {
      const currentState = {
        ...initState,
        validation: {
          ...initState.validation,
          password: { isValid: true, message: '' }
        }
      };
      expect(
        reducer(currentState, { type: actionTypes.PASSWORD_CONSTRAINT_VALID })
      ).toStrictEqual(currentState);
    });
    it(`${actionTypes.PASSWORD_CONSTRAINT_NOT_VALID}`, () => {
      const currentState = {
        ...initState,
        validation: {
          ...initState.validation,
          password: { isValid: false, message: '' }
        }
      };
      expect(
        reducer(currentState, {
          type: actionTypes.PASSWORD_CONSTRAINT_NOT_VALID,
          payload: { message: 'invalid password' }
        })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          password: { isValid: false, message: 'invalid password' }
        }
      });
    });
  });
  describe('validateEmailConstraint', () => {
    it(`${actionTypes.EMAIL_CONSTRAINT_VALID}`, () => {
      const currentState = { ...initState };
      expect(
        reducer(currentState, { type: actionTypes.EMAIL_CONSTRAINT_VALID })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          email: { isValid: true, message: '' }
        }
      });
    });
    it(`${actionTypes.EMAIL_CONSTRAINT_NOT_VALID}`, () => {
      const currentState = { ...initState };
      expect(
        reducer(currentState, {
          type: actionTypes.EMAIL_CONSTRAINT_NOT_VALID,
          payload: { message: 'invalid email' }
        })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          email: { isValid: false, message: 'invalid email' }
        }
      });
    });
  });
  describe('validateEmptyString', () => {
    it(`${actionTypes.STRING_CONSTRAINT_VALID}`, () => {
      const currentState = { ...initState };
      expect(
        reducer(currentState, {
          type: actionTypes.STRING_CONSTRAINT_VALID,
          payload: { propName: 'password' }
        })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          password: { isValid: true, message: '' }
        }
      });
    });
    it(`${actionTypes.STRING_CONSTRAINT_NOT_VALID}`, () => {
      const currentState = { ...initState };
      expect(
        reducer(currentState, {
          type: actionTypes.STRING_CONSTRAINT_NOT_VALID,
          payload: { propName: 'password', message: 'invalid password' }
        })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          password: { isValid: false, message: 'invalid password' }
        }
      });
    });
  });
});
