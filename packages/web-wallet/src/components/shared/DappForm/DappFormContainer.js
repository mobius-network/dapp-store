import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError, submit } from 'redux-form';
import { translate } from 'react-i18next';
import { promisifyAction } from 'redux-yo';

import { validate } from './validations';

import DappForm from './DappForm';

const mapDispatchToProps = {
  submitDappForm: () => submit('dappForm'),
};

export default compose(
  connect(null, mapDispatchToProps),
  translate('translation'),
  reduxForm({
    form: 'dappForm',
    validate,
    onSubmit: (values, store, { onSubmit }) =>
      promisifyAction(onSubmit, values).catch(error => {
        throw new SubmissionError(error);
      }),
  })
)(DappForm);
