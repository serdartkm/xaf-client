import * as actions from '../actions';
import actionTypes from '../actionTypes';
import validationTypes, { serverValidationType } from '../validationTypes';
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
  describe(`${validationTypes.EMAIL}`, () => {
    it('validationState VALID', () => {
      expect(
        actions.validateInput({
          propName: 'email',
          validationType: validationTypes.EMAIL,
          value: 'test@gmail.com'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'email',
        payload: { validationState: validationStates.VALID, message: '' }
      });
    });

    it('validationState INVALID', () => {
      expect(
        actions.validateInput({
          propName: 'email',
          validationType: validationTypes.EMAIL,
          value: 'testgmail.com'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'email',
        payload: {
          validationState: validationStates.INVALID,
          message: validationMessages.INVALID_EMAIL
        }
      });
    });
  });

  describe('validatePasswordConstraint', () => {
    it('validationState VALID', () => {
      expect(
        actions.validateInput({
          propName: 'password',
          validationType: validationTypes.PASSWORD,
          value: 'Test12345!'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'password',
        payload: {
          validationState: validationStates.VALID,
          message: ''
        }
      });
    });
    it('validationState INVALID', () => {
      expect(
        actions.validateInput({
          propName: 'password',
          validationType: validationTypes.PASSWORD,
          value: 'T'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'password',
        payload: {
          validationState: validationStates.INVALID,
          message: validationMessages.INVALID_PASSWORD
        }
      });
    });
  });
  describe('validateEmptyString', () => {
    it('validationState INVALID', () => {
      expect(
        actions.validateInput({
          propName: 'password',
          validationType: validationTypes.EMPTY_STRING,
          value: '1234'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'password',
        payload: {
          validationState: validationStates.VALID,
          message: ``
        }
      });
    });
    it('validationState INVALID', () => {
      expect(
        actions.validateInput({
          propName: 'password',
          validationType: validationTypes.EMPTY_STRING,
          value: ''
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'password',
        payload: {
          validationState: validationStates.INVALID,
          message: validationMessages.INVALID_EMPTY_STRING
        }
      });
    });
  });

  describe('validateUserName', () => {
    it('validationState INVALID', () => {
      expect(
        actions.validateInput({
          propName: 'username',
          validationType: validationTypes.USERNAME,
          value: 'tkmhousenew'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'username',
        payload: {
          validationState: validationStates.VALID,
          message: ``
        }
      });
    });

    it('validationState INVALID', () => {
      expect(
        actions.validateInput({
          propName: 'username',
          validationType: validationTypes.USERNAME,
          value: '12334'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'username',
        payload: {
          validationState: validationStates.INVALID,
          message: validationMessages.INVALID_USERNAME
        }
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
        type: actionTypes.INPUT_BLURRED,
        propName: 'confirm',
        payload: {
          validationState: validationStates.VALID,
          message: ``
        }
      });
    });

    it('validationState.INVALID', () => {
      expect(
        actions.validatePasswordMatch({
          passwordValue: '123',
          confirmValue: '123DD',
          propName: 'confirm'
        })
      ).toStrictEqual({
        type: actionTypes.INPUT_BLURRED,
        propName: 'confirm',
        payload: {
          validationState: validationStates.INVALID,
          message: validationMessages.PASSWORDS_DO_NOT_MATCH
        }
      });
    });

    describe('serverValidation action', () => {
      it(`serverValidation action ${serverValidationType.INVALID_USERNAME}`, () => {
        expect(actions.serverValidation({ status: 401 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_CREDENTIALS,
          serverValidationType: serverValidationType.INVALID_CREDENTIAL
        });
      });
      it.only(`serverValidation action ${serverValidationType.USERNAME_TAKEN}`, () => {
        expect(actions.serverValidation({ status: 402 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.USERNAME_TAKEN,
          serverValidationType: serverValidationType.USERNAME_TAKEN
        });
      });
      it(`serverValidation action ${serverValidationType.REGISTERED_EMAIL}`, () => {
        expect(actions.serverValidation({ status: 403 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.REGISTERED_EMAIL,
          serverValidationType: serverValidationType.REGISTERED_EMAIL
        });
      });
      it(`serverValidation action ${serverValidationType.EMAIL_NOT_REGISTERED}`, () => {
        expect(actions.serverValidation({ status: 405 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_USERNAME,
          serverValidationType: serverValidationType.INVALID_USERNAME
        });
      });
      it(`serverValidation action ${serverValidationType.INVALID_EMAIL}`, () => {
        expect(actions.serverValidation({ status: 406 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_PASSWORD,
          serverValidationType: serverValidationType.INVALID_PASSWORD
        });
      });
      it(`serverValidation action ${serverValidationType.INVALID_CREDENTIAL}`, () => {
        expect(actions.serverValidation({ status: 407 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_EMAIL,
          serverValidationType: serverValidationType.INVALID_EMAIL
        });
      });
      it(`serverValidation action ${serverValidationType.INVALID_USERNAME_OR_PASSWORD}`, () => {
        expect(actions.serverValidation({ status: 408 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.EMAIL_NOT_REGISTERED,
          serverValidationType: serverValidationType.EMAIL_NOT_REGISTERED
        });
      });
      it(`serverValidation action ${serverValidationType.INVALID_EMPTY_STRING}`, () => {
        expect(actions.serverValidation({ status: 409 })).toStrictEqual({
          type: actionTypes.SERVER_VALIDATION,
          message: validationMessages.INVALID_EMPTY_STRING,
          serverValidationType: serverValidationType.INVALID_EMPTY_STRING
        });
      });
    });
  });
});


