import { combineValidators, isRequired } from 'revalidate';

export const validate = combineValidators({
  password: isRequired('Password'),
  keyfile: isRequired('Keyfile'),
});
