import reducer from '../reducer';
import actionTypes from '../actionTypes';
import * as validations from '../validations';
import validationStates from '../validationStates';
import * as actions from '../actions';
describe('Reducer', () => {
  it('handles INPUT_FOCUSED', () => {
    const currentState = {
      validation: {
        email: { validationState: validationStates.INVALID, message: 'SDSD' }
      }
    };
    expect(
      reducer(currentState, {
        ...actions.inputFocused({ propName: 'email' })
      })
    ).toStrictEqual({
      validation: {
        email: { validationState: validationStates.INACTIVE, message: '' }
      }
    });
  });
});
describe('validateEmailConstraint', () => {
  it(`VALID EMAIL`, () => {
    const currentState = {
      validation: {
        email: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateEmailConstraint({
          email: 'test@gmail.com',
          propName: 'email'
        })
      })
    ).toStrictEqual({
      validation: {
        email: { validationState: validationStates.VALID, message: '' }
      }
    });
  });
  it(`VALID EMAIL`, () => {
    const currentState = {
      validation: {
        email: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateEmailConstraint({
          email: 'testgmail.com',
          propName: 'email'
        })
      })
    ).toStrictEqual({
      validation: {
        email: {
          validationState: validationStates.INVALID,
          message: 'email is not valid'
        }
      }
    });
  });
});
describe('validatePasswordConstraint', () => {
  it(`VALID PASSWORD`, () => {
    const currentState = {
      validation: {
        password: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validatePasswordConstraint({
          password: 'Test1234!',
          propName: 'password'
        })
      })
    ).toStrictEqual({
      validation: {
        password: { validationState: validationStates.VALID, message: '' }
      }
    });
  });
  it(`INVALID PASSWORD`, () => {
    const currentState = {
      validation: {
        password: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validatePasswordConstraint({
          password: 'Tes',
          propName: 'password'
        })
      })
    ).toStrictEqual({
      validation: {
        password: {
          validationState: validationStates.INVALID,
          message: `at least 8 characters, must contain at least 1 uppercase letter,  1 lowercase letter, Can contain special characters`
        }
      }
    });
  });
});

describe('validateUsernameConstraint', () => {
  it(`VALID USERNAME`, () => {
    const currentState = {
      validation: {
        username: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateUserNameConstraint({
          username: 'tkmhouse',
          propName: 'username'
        })
      })
    ).toStrictEqual({
      validation: {
        username: { validationState: validationStates.VALID, message: '' }
      }
    });
  });
  it(`INVALID USERNAME`, () => {
    const currentState = {
      validation: {
        username: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateUserNameConstraint({
          username: '12122',
          propName: 'username'
        })
      })
    ).toStrictEqual({
      validation: {
        username: {
          validationState: validationStates.INVALID,
          message: `Only Letters a-z or A-Z and the Symbols - and _ are allowed`
        }
      }
    });
  });
});

describe('validateUsernameConstraint', () => {
  it(`VALID EMPTYSTRING`, () => {
    const currentState = {
      validation: {
        password: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateEmptyString({
          value: '123',
          propName: 'password'
        })
      })
    ).toStrictEqual({
      validation: {
        password: { validationState: validationStates.VALID, message: '' }
      }
    });
  });
  it(`INVALID EMPTYSTRING`, () => {
    const currentState = {
      validation: {
        password: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateEmptyString({
          value: '',
          propName: 'password'
        })
      })
    ).toStrictEqual({
      validation: {
        password: {
          validationState: validationStates.INVALID,
          message: `empty string not allowed`
        }
      }
    });
  });
});
