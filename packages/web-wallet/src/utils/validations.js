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
