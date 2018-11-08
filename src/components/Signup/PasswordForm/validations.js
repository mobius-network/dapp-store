import {
  combineValidators,
  hasLengthGreaterThan,
  composeValidators,
  isRequired,
} from 'revalidate';

import { isEquals } from 'utils';

export const validate = combineValidators({
  password: composeValidators(isRequired, hasLengthGreaterThan(5))('Password'),
  passwordConfirmation: composeValidators(
    isRequired,
    isEquals('password')({ message: 'Confirmation must match password' })
  )('Password Confirmation'),
});
