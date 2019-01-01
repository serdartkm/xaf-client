import * as actions from '../actions';
import actionTypes from '../actionTypes';
describe('validateEmailConstraint', () => {
  describe('validatePasswordConstraint', () => {
    it(`${actionTypes.PASSWORD_CONSTRAINT_VALID}`, () => {
      expect(
        actions.validatePasswordConstraint({ password: 'Testing193!' })
      ).toStrictEqual({ type: actionTypes.PASSWORD_CONSTRAINT_VALID });
    });

    it(`${actionTypes.PASSWORD_CONSTRAINT_NOT_VALID}`, () => {
      expect(
        actions.validatePasswordConstraint({ password: '!' })
      ).toStrictEqual({
        type: actionTypes.PASSWORD_CONSTRAINT_NOT_VALID,
        payload: {
          message: `at least 8 characters, must contain at least 1 uppercase letter,  1 lowercase letter, Can contain special characters`
        }
      });
    });
  });

  describe('validateEmailConstraint', () => {
    it(`${actionTypes.EMAIL_CONSTRAINT_VALID}`, () => {
      expect(
        actions.validateEmailConstraint({ email: 'test@gmail.com' })
      ).toStrictEqual({ type: actionTypes.EMAIL_CONSTRAINT_VALID });
    });

    it(`${actionTypes.EMAIL_CONSTRAINT_NOT_VALID}`, () => {
      expect(
        actions.validateEmailConstraint({ email: 'testgmail.com' })
      ).toStrictEqual({
        type: actionTypes.EMAIL_CONSTRAINT_NOT_VALID,
        payload: { message: 'email is not valid' }
      });
    });
  });
  describe('validateEmptyString', () => {
    it(`${actionTypes.STRING_CONSTRAINT_VALID}`, () => {
      expect(
        actions.validateEmptyString({ propName: 'password', value: '123' })
      ).toStrictEqual({
        type: actionTypes.STRING_CONSTRAINT_VALID,
        payload: { propName: 'password' }
      });
    });

    it(`${actionTypes.STRING_CONSTRAINT_NOT_VALID}`, () => {
      expect(
        actions.validateEmptyString({ propName: 'password', value: '' })
      ).toStrictEqual({
        type: actionTypes.STRING_CONSTRAINT_NOT_VALID,
        payload: { propName: 'password', message: 'empty string not allowed' }
      });
    });
  });

  describe('validateUserName', () => {
    it(`${actionTypes.USERNAME_CONSTRAINT_VALID}`, () => {
      expect(
        actions.validateUserNameConstraint({ username: 'dragos' })
      ).toStrictEqual({ type: actionTypes.USERNAME_CONSTRAINT_VALID });
    });
    it(`${actionTypes.USERNAME_CONSTRAINT_NOT_VALID}`, () => {
      expect(
        actions.validateUserNameConstraint({ username: '' })
      ).toStrictEqual({
        type: actionTypes.USERNAME_CONSTRAINT_NOT_VALID,
        payload: {
          message: `Only Letters a-z or A-Z and the Symbols - and _ are allowed`
        }
      });
    });
  });
});
