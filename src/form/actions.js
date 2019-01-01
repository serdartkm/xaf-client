
import * as validations from './validations';
import validationTypes from './validationTypes';

export function validateInput({ propName, validationType, value }) {
  switch (validationType) {
    case validationTypes.EMAIL:
      return validations.validateEmailConstraint({ propName, email: value });
    case validationTypes.PASSWORD:
      return validations.validatePasswordConstraint({
        password: value,
        propName
      });
    case validationTypes.EMPTY_STRING:
      return validations.validateEmptyString({ value, propName });
    default:
      return validations.validateEmptyString({ value, propName });
  }
}
