import { composeValidators, isRequired } from 'revalidate';

import {
  combineValidators,
  isRationalNumber,
  isLessThanProp,
} from 'utils/validations';

export const validate = combineValidators({
  amount: composeValidators(
    isRequired,
    isRationalNumber,
    isLessThanProp({
      name: 'mobiBalance',
      label: 'MOBI balance',
    })({ message: 'Insufficient MOBI balance' })
  )('Amount'),
});
