import {
  combineValidators,
  composeValidators,
  isRequired,
  isNumeric,
} from 'revalidate';

export const validate = combineValidators({
  amount: composeValidators(isRequired, isNumeric)('Amount'),
  destination: isRequired('Wallet Address'),
});
