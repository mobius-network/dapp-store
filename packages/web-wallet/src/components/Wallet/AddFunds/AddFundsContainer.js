import { connect } from 'react-redux';

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

export default connect(mapStateToProps, actions)(AddFunds);
