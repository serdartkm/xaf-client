import reducer from '../reducer';
import actionTypes from '../actionTypes';
import * as validators from '../constraintValidators';
import validationStates from '../validationStates';
import validationTypes from '../validationTypes';
import validationMessage from '../validationMessages';
import * as actions from '../actions';
import validationMessages from '../validationMessages';

describe('validateEmailConstraint', () => {
  it(`VALID EMAIL`, () => {
    const currentState = {
      validation: {}
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validateEmailConstraint({
          email: 'test@gmail.com'
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.EMAIL_FORMAT_VALIDATION]: {
          validationState: validationStates.VALID,
          message: ''
        }
      }
    });
  });

  it(`VALID EMAIL`, () => {
    const currentState = {
      validation: {}
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validateEmailConstraint({
          email: 'testgmail.com'
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.EMAIL_FORMAT_VALIDATION]: {
          validationState: validationStates.INVALID,
          message: validationMessage.INVALID_EMAIL
        }
      }
    });
  });
});

describe('validatePasswordConstraint', () => {
  it(`VALID PASSWORD`, () => {
    const currentState = {
      validation: {}
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validatePasswordConstraint({
          password: 'Test1234!'
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.PASSWORD_FORMAT_VALIDATION]: {
          validationState: validationStates.VALID,
          message: ''
        }
      }
    });
  });
  it(`INVALID PASSWORD`, () => {
    const currentState = {
      validation: {}
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validatePasswordConstraint({
          password: 'Tes'
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.PASSWORD_FORMAT_VALIDATION]: {
          validationState: validationStates.INVALID,
          message: validationMessage.INVALID_PASSWORD
        }
      }
    });
  });
});

describe('validateUsernameConstraint', () => {
  it(`VALID USERNAME`, () => {
    const currentState = {
      validation: {
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validateUserNameConstraint({
          username: 'tkmhouse'
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.USERNAME_FORMAT_VALIDATION]: {
          validationState: validationStates.VALID,
          message: ''
        }
      }
    });
  });
  it(`INVALID USERNAME`, () => {
    const currentState = {
      validation: {
     
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validateUserNameConstraint({
          username: '12122',
       
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.USERNAME_FORMAT_VALIDATION]: {
          validationState: validationStates.INVALID,
          message: validationMessages.INVALID_USERNAME
        }
      }
    });
  });
});

describe('validateEmptyStringConstraint', () => {
  it(`VALID EMPTYSTRING`, () => {
    const currentState = {
      validation: {

      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validateEmptyString({
          value: '123'
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.EMPTY_STRING_VALIDATION]: {
          validationState: validationStates.VALID,
          message:''
        }
      }
    });
  });
  it(`INVALID EMPTYSTRING`, () => {
    const currentState = {
      validation: {

      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.CLIENT_VALIDATION,
        ...validators.validateEmptyString({
          value: ''
        })
      })
    ).toStrictEqual({
      validation: {
        [validationTypes.EMPTY_STRING_VALIDATION]: {
          validationState: validationStates.INVALID,
          message:validationMessages.INVALID_EMPTY_STRING
        }
      }
    });
  });
});



  describe('Server validation', () => {
    it(`${validationTypes.INVALID_CREDENTIAL}`, () => {

      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 401 }))
      ).toStrictEqual({
        validation: {
          [validationTypes.INVALID_CREDENTIALS]: {
            validationState: validationStates.INVALID,
            message:validationMessages.INVALID_CREDENTIALS
          }
        }
      });
    });
    it(`${validationTypes.USERNAME_TAKEN}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 402 }))
      ).toStrictEqual({
        validation: {
          [validationTypes.USERNAME_TAKEN]: {
            validationState: validationStates.INVALID,
            message:validationMessages.USERNAME_TAKEN
          }
        }
      });
    });

    it(`${validationTypes.REGISTERED_EMAIL}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 403 }))
      ).toStrictEqual({
        validation: {
          [validationTypes.REGISTERED_EMAIL]: {
            validationState: validationStates.INVALID,
            message:validationMessages.REGISTERED_EMAIL
          }
        }
      });
    });
    it(`${validationTypes.USERNAME_FORMAT_VALIDATION}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 405 }))
      ).toStrictEqual({
        validation: {
          [validationTypes.USERNAME_FORMAT_VALIDATION]: {
            validationState: validationStates.INVALID,
            message:validationMessages.INVALID_USERNAME
          }
        }
      });
    });
    it(`${validationTypes.PASSWORD_FORMAT_VALIDATION}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 406 }))
      ).toStrictEqual({
        validation: {
          [validationTypes.PASSWORD_FORMAT_VALIDATION]: {
            validationState: validationStates.INVALID,
            message:validationMessages.INVALID_PASSWORD
          }
        }
      });
    });
    it(`${validationTypes.EMAIL_FORMAT_VALIDATION}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 407 }))
      ).toStrictEqual({
        validation: {
          [validationTypes.EMAIL_FORMAT_VALIDATION]: {
            validationState: validationStates.INVALID,
            message:validationMessages.INVALID_EMAIL
          }
        }
      });

    });
    it(`${validationTypes.EMAIL_NOT_REGISTERED}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 408 }))
      ).toStrictEqual({
        validation: {
          EMAIL_NOT_REGISTERED: {
            validationState: validationStates.INVALID,
            message: validationMessage.EMAIL_NOT_REGISTERED
          }
        }
      });

    });
    it(`${validationTypes.EMPTY_STRING_VALIDATION}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 409 }))
      ).toStrictEqual({
        validation: {
          EMPTY_STRING_VALIDATION: {
            validationState: validationStates.INVALID,
            message: validationMessage.INVALID_EMPTY_STRING
          }
        }
      });
   });
})