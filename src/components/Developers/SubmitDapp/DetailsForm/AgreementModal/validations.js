import { composeValidators, isRequired } from 'revalidate';

import { combineValidators, isTrueIsh } from 'utils/validations';

export const validate = combineValidators({
  agree: composeValidators(isRequired, isTrueIsh)('Agreement'),
});
