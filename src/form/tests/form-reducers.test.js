import reducer, { initState } from '../reducer';
import actionTypes from '../actionTypes';
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

  describe('validateUserName', () => {
    it(`${actionTypes.USERNAME_CONSTRAINT_VALID}`, () => {
      const currentState = { ...initState };
      expect(
        reducer(currentState, { type: actionTypes.USERNAME_CONSTRAINT_VALID })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          username: { isValid: true, message: '' }
        }
      });
    });

    it(`${actionTypes.USERNAME_CONSTRAINT_NOT_VALID}`, () => {
      const currentState = { ...initState };
      expect(
        reducer(currentState, {
          type: actionTypes.USERNAME_CONSTRAINT_NOT_VALID,
          payload: { message: 'username is not valid' }
        })
      ).toStrictEqual({
        ...currentState,
        validation: {
          ...currentState.validation,
          username: { isValid: false, message: 'username is not valid' }
        }
      });
    });
  });
});
