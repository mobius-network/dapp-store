import { compose } from 'redux';
import { formValues, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getAssetBalance } from 'state/account';
import { appActions } from 'state/apps';

import { restMutation } from 'components/hocs';
import { validate } from './validations';
import AppDepositForm from './AppDepositForm';

const mapStateToProps = state => ({
  mobiBalance: getAssetBalance(state, { asset: 'mobi' }),
});

export default compose(
  connect(mapStateToProps),
  translate('translation'),
  restMutation({
    name: 'depositApp',
    action: appActions.depositApp,
  }),
  reduxForm({
    form: 'appDepositForm',
    initialValues: {
      amount: 3,
    },
    validate,
    onSubmit: async ({ amount }, store, { depositApp, app, onSuccess }) => {
      try {
        const result = await depositApp.mutate({ app, amount });
        onSuccess(result);
      } catch (error) {
        throw new SubmissionError(error);
      }
    },
  }),
  formValues('amount')
)(AppDepositForm);
