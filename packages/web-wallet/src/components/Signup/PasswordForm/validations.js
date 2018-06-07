import { combineValidators, composeValidators, isRequired } from 'revalidate';

import { isEquals } from 'utils';

export const validate = combineValidators({
  password: isRequired('Password'),
  passwordConfirmation: composeValidators(
    isRequired,
    isEquals('password')({ message: 'Confirmation must match password' })
  )('Password Confirmation'),
});
