import { combineValidators, composeValidators, isRequired } from 'revalidate';

import { isRationalNumber } from 'utils/validations';

export const validate = combineValidators({
  amount: composeValidators(isRequired, isRationalNumber)('Amount'),
});
