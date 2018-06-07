export const validate = values => {
  let errors = {};

  if (!values.password) {
    errors = Object.assign({}, errors, {
      password: 'Password required',
    });
  }

  if (!values.keyfile || !values.keyfile.length) {
    errors = Object.assign({}, errors, {
      keyfile: 'Keyfile required',
    });
  }

  return errors;
};
