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
      name: 'xlmAmount',
      label: 'XLM balance',
    })({ message: 'Insufficient XLM balance' })
  )('Amount'),
});
