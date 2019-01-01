import * as actions from '../actions';
import actionTypes from '../actionTypes';
import validationTypes from '../validationTypes';
import validationStates from '../validationStates';
import validationMessages from '../validationMessages';

describe('Input focused', () => {
  it(`dispatch INPUT_FOCUSED`, () => {
    expect(actions.inputFocused({ propName: 'email' })).toStrictEqual({
      type: actionTypes.INPUT_FOCUSED,
      propName: 'email'
    });
  });
});
describe('validateEmailConstraint', () => {
  describe(`${validationTypes.EMAIL_FORMAT_VALIDATION}`, () => {
    it('validationState VALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
          value: 'test@gmail.com'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
        validationState: validationStates.VALID,
        message: ''
      });
    });

    it('validationState INVALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
          value: 'testgmail.com'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
        validationState: validationStates.INVALID,
        message: validationMessages.INVALID_EMAIL
      });
    });
  });

  describe('validatePasswordConstraint', () => {
    it('validationState VALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
          value: 'Test12345!'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
        validationState: validationStates.VALID,
        message: ''
      });
    });
    it('validationState INVALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
          value: 'T'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
        validationState: validationStates.INVALID,
        message: validationMessages.INVALID_PASSWORD
      });
    });
  });
  describe('validateEmptyString', () => {
    it('validationState INVALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.EMPTY_STRING_VALIDATION,
          value: '1234'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.EMPTY_STRING_VALIDATION,
        validationState: validationStates.VALID,
        message: ``
      });
    });
    it('validationState INVALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.EMPTY_STRING_VALIDATION,
          value: ''
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.EMPTY_STRING_VALIDATION,
        validationState: validationStates.INVALID,
        message: validationMessages.INVALID_EMPTY_STRING
      });
    });
  });

  describe('validateUserName', () => {
    it('validationState INVALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
          value: 'tkmhousenew'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
        validationState: validationStates.VALID,
        message: ``
      });
    });

    it('validationState INVALID', () => {
      expect(
        actions.clientValidation({
          validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
          value: '12334'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
        validationState: validationStates.INVALID,
        message: validationMessages.INVALID_USERNAME
      });
    });
  });

  describe('validatePasswordMatch', () => {
    it('validationState.VALID', () => {
      expect(
        actions.validatePasswordMatch({
          passwordValue: '123',
          confirmValue: '123',
          propName: 'confirm'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationType: validationTypes.PASSWORDS_MATCH_VALIDATION,
        validationState: validationStates.VALID,
        message: ``
      });
    });

    it('validationState.INVALID', () => {
      expect(
        actions.validatePasswordMatch({
          passwordValue: '123',
          confirmValue: '123DD'
        })
      ).toStrictEqual({
        type: actionTypes.CLIENT_VALIDATION,
        validationState: validationStates.INVALID,
        validationType: validationTypes.PASSWORDS_MATCH_VALIDATION,
        message: validationMessages.PASSWORDS_DO_NOT_MATCH
      });
    });

    describe('serverValidation action', () => {
      it(`serverValidation action ${validationTypes.INVALID_USERNAME}`, () => {
        expect(actions.serverValidation({ status: 401 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_CREDENTIALS,
          validationType: validationTypes.INVALID_CREDENTIALS,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.USERNAME_TAKEN}`, () => {
        expect(actions.serverValidation({ status: 402 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.USERNAME_TAKEN,
          validationType: validationTypes.USERNAME_TAKEN,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.REGISTERED_EMAIL}`, () => {
        expect(actions.serverValidation({ status: 403 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.REGISTERED_EMAIL,
          validationType: validationTypes.REGISTERED_EMAIL,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.USERNAME_FORMAT_VALIDATION}`, () => {
        expect(actions.serverValidation({ status: 405 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_USERNAME,
          validationType: validationTypes.USERNAME_FORMAT_VALIDATION,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.PASSWORD_FORMAT_VALIDATION}`, () => {
        expect(actions.serverValidation({ status: 406 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_PASSWORD,
          validationType: validationTypes.PASSWORD_FORMAT_VALIDATION,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.EMAIL_FORMAT_VALIDATION}`, () => {
        expect(actions.serverValidation({ status: 407 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_EMAIL,
          validationType: validationTypes.EMAIL_FORMAT_VALIDATION,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.INVALID_USERNAME_OR_PASSWORD}`, () => {
        expect(actions.serverValidation({ status: 408 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.EMAIL_NOT_REGISTERED,
          validationType: validationTypes.EMAIL_NOT_REGISTERED,
          validationState: validationStates.INVALID
        });
      });
      it(`serverValidation action ${validationTypes.INVALID_EMPTY_STRING}`, () => {
        expect(actions.serverValidation({ status: 409 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_EMPTY_STRING,
          validationType: validationTypes.EMPTY_STRING_VALIDATION,
          validationState: validationStates.INVALID
        });
      });
    });
  });
});
