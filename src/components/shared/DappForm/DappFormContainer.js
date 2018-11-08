import { compose } from 'redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { translate } from 'react-i18next';
import { promisifyAction } from 'redux-yo';

import { validate } from './validations';

import DappForm from './DappForm';

export default compose(
  translate('translation'),
  reduxForm({
    form: 'dappForm',
    validate,
    onSubmit: (values, store, { onSubmit }) => promisifyAction(onSubmit, values).catch((error) => {
      throw new SubmissionError(error);
    }),
  })
)(DappForm);
