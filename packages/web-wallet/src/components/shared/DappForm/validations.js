import {
  composeValidators,
  createValidator,
  isRequired,
  hasLengthLessThan,
} from 'revalidate';

import {
  combineValidators,
  isUrl,
  urlPattern,
  mailtoUrlPattern,
} from 'utils/validations';

const supportUrlValidator = createValidator(
  message => value => {
    if (!(urlPattern.test(value) || mailtoUrlPattern.test(value))) {
      return message;
    }

    return undefined;
  },
  field => `${field} must be either URl or mailto URL`
);

export const validate = combineValidators({
  auth_url: composeValidators(isRequired, isUrl)('Auth URL'),
  description: composeValidators(isRequired)('Description'),
  image_url: composeValidators(isRequired, isUrl)('App Icon'),
  name: composeValidators(isRequired)('Name'),
  support_url: composeValidators(isRequired, supportUrlValidator)('Support URL'),
  tagline: composeValidators(isRequired, hasLengthLessThan(60))('Tagline'),
  url: composeValidators(isRequired, isUrl)('DApp URL'),
  website_url: composeValidators(isRequired, isUrl)('Homepage URL'),
});
