import { composeValidators, isRequired, hasLengthLessThan } from 'revalidate';

import { combineValidators, isUrl } from 'utils/validations';

export const validate = combineValidators({
  name: composeValidators(isRequired)('Name'),
  url: composeValidators(isRequired, isUrl)('DApp URL'),
  websiteUrl: composeValidators(isRequired, isUrl)('Homepage URL'),
  tagline: composeValidators(isRequired, hasLengthLessThan(60))('Short Description'),
  description: composeValidators(isRequired)('Description'),
  imageUrl: composeValidators(isRequired, isUrl)('App Icon'),
});
