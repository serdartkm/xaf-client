import * as actions from '../actions';
import actionTypes from '../actionTypes';
import validationTypes from '../validationTypes';
import validationStates from '../validationStates';
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
          message: 'email is not valid'
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
          message: `at least 8 characters, must contain at least 1 uppercase letter,  1 lowercase letter, Can contain special characters`
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
          message: `empty string not allowed`
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
          message: `Only Letters a-z or A-Z and the Symbols - and _ are allowed`
        }
      });
    });
  });
});
