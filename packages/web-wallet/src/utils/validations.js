import { createValidator } from 'revalidate';
import _ from 'lodash';

function formatMessage(message, defaultMessage) {
  return _.isObject(message) && message.message
    ? message.message
    : defaultMessage(message);
}

export const isEquals = comparisonValue =>
  createValidator(
    message => (value, allValues) => {
      if (value !== allValues[comparisonValue]) {
        return message;
      }

      return undefined;
    },
    field =>
      formatMessage(field, f => `${f} must be equal to "${comparisonValue}"`)
  );

export const isRationalNumber = createValidator(
  message => value => {
    if (!/^(\d*\.)?\d+$/i.test(value)) {
      return message;
    }

    return undefined;
  },
  field => `${field} must be a rational number`
);
