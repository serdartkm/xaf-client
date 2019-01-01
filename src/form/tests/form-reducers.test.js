import reducer from '../reducer';
import actionTypes from '../actionTypes';
import * as validations from '../validations';
import validationStates from '../validationStates';
import validationMessage from '../validationMessages';
import * as actions from '../actions';
import  { serverValidationType } from '../validationTypes';
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
        formState: validationStates.INACTIVE,
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
        formState: validationStates.VALID,
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
        formState: validationStates.INVALID,
        email: {
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
        formState: validationStates.VALID,
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
        formState: validationStates.INVALID,
        password: {
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
        formState: validationStates.VALID,
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
        formState: validationStates.INVALID,
        username: {
          validationState: validationStates.INVALID,
          message: validationMessage.INVALID_USERNAME
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
        formState: validationStates.VALID,
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
        formState: validationStates.INVALID,
        password: {
          validationState: validationStates.INVALID,
          message: validationMessage.INVALID_EMPTY_STRING
        }
      }
    });
  });
});

describe('FORM VALIDATION STATE', () => {
  it('formState VALID', () => {
    const currentState = {
      validation: {
        password: { validationState: validationStates.INACTIVE, message: '' }
      }
    };
    expect(
      reducer(currentState, {
        type: actionTypes.INPUT_BLURRED,
        ...validations.validateEmptyString({
          value: 'sdsd',
          propName: 'password'
        })
      })
    ).toStrictEqual({
      validation: {
        formState: validationStates.VALID,
        password: {
          validationState: validationStates.VALID,
          message: ``
        }
      }
    });
  });
  it('formState INVALID', () => {
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
        formState: validationStates.INVALID,
        password: {
          validationState: validationStates.INVALID,
          message: validationMessage.INVALID_EMPTY_STRING
        }
      }
    });
  });

  describe('Server validation', () => {
    it(`${serverValidationType.INVALID_CREDENTIAL}`, () => {
 
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 401 }))
      ).toStrictEqual({
        serverValidation: {
          INVALID_CREDENTIALS: {
            validationState: validationStates.INVALID,
            message: validationMessage.INVALID_CREDENTIALS
          }
        }
      });
    });
    it(`${serverValidationType.USERNAME_TAKEN}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 402 }))
      ).toStrictEqual({
        serverValidation: {
          USERNAME_TAKEN: {
            validationState: validationStates.INVALID,
            message: validationMessage.USERNAME_TAKEN
          }
        }
      });
    });
    it(`${serverValidationType.REGISTERED_EMAIL}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 403 }))
      ).toStrictEqual({
        serverValidation: {
          REGISTERED_EMAIL: {
            validationState: validationStates.INVALID,
            message: validationMessage.REGISTERED_EMAIL
          }
        }
      });
    });
    it(`${serverValidationType.INVALID_USERNAME}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 405 }))
      ).toStrictEqual({
        serverValidation: {
          INVALID_USERNAME: {
            validationState: validationStates.INVALID,
            message: validationMessage.INVALID_USERNAME
          }
        }
      });
    });
    it(`${serverValidationType.INVALID_PASSWORD}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 406 }))
      ).toStrictEqual({
        serverValidation: {
          INVALID_PASSWORD: {
            validationState: validationStates.INVALID,
            message: validationMessage.INVALID_PASSWORD
          }
        }
      });
    });
    it(`${serverValidationType.INVALID_EMAIL}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 407 }))
      ).toStrictEqual({
        serverValidation: {
          INVALID_EMAIL: {
            validationState: validationStates.INVALID,
            message: validationMessage.INVALID_EMAIL
          }
        }
      });

    });
    it(`${serverValidationType.EMAIL_NOT_REGISTERED}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 408 }))
      ).toStrictEqual({
        serverValidation: {
          EMAIL_NOT_REGISTERED: {
            validationState: validationStates.INVALID,
            message: validationMessage.EMAIL_NOT_REGISTERED
          }
        }
      });

    });
    it(`${serverValidationType.INVALID_EMPTY_STRING}`, () => {
      const currentState = {};
      expect(
        reducer(currentState, actions.serverValidation({ status: 409 }))
      ).toStrictEqual({
        serverValidation: {
          INVALID_EMPTY_STRING: {
            validationState: validationStates.INVALID,
            message: validationMessage.INVALID_EMPTY_STRING
          }
        }
      });

    });
  
  });
});
