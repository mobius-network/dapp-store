import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getAssetBalance } from 'state/account';
import { requestActions, getIsSuccess } from 'state/requests';

import AddFunds from './AddFunds';

const mapStateToProps = (state, { match }) => ({
  balance: getAssetBalance(state, { asset: match.params.asset || 'mobi' }),
  pathPaymentCompleted: getIsSuccess(state, { operation: 'pathPayment' }),
});

const actions = {
  ...requestActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(AddFunds);
