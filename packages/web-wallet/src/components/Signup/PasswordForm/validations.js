export const validate = values => {
  let errors = {};

  if (!values.password) {
    errors = Object.assign({}, errors, {
      password: 'Password required',
    });
  }

  if (!values.passwordConfirmation) {
    errors = Object.assign({}, errors, {
      passwordConfirmation: 'Password confirmation required',
    });
  }

  if (values.password !== values.passwordConfirmation) {
    errors = Object.assign({}, errors, {
      passwordConfirmation: 'Passwords must match',
    });
  }

  return errors;
};
