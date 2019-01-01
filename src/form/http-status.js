export default {
  credentialInvalid: 401,
  usernameIsTaken: 402,
  emailIsRegistered: 403,
  usernameInvalid: 405,
  passwordInvalid: 406,
  emailInvalid: 407,
  emailIsNotRegistered: 408,
  emptyStringNotValid:409,
  serverValidationRange: status => {
    if (status >= 400 && status <= 410) {
      return true;
    }
    return false;
  }
};
