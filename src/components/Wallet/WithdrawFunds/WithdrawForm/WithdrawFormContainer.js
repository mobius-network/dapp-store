import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { accountActions, getAssetBalance } from 'state/account';

import { restMutation } from 'components/hocs';
import { validate } from './validations';
import WithdrawForm from './WithdrawForm';

const mapStateToProps = (state, { asset }) => ({
  form: `${asset}WithdrawForm`,
  balance: getAssetBalance(state, { asset }),
});

export default compose(
  connect(mapStateToProps),
  translate('translation'),
  restMutation({
    name: 'withdrawAsset',
    action: accountActions.transact,
  }),
  reduxForm({
    validate,
  })
)(WithdrawForm);
