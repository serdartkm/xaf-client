export const passwordRegex = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  'g'
);
export const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
);

export const usernameRegex = new RegExp(/[a-zA-Z]+[-_]*[a-zA-Z]+/g);

