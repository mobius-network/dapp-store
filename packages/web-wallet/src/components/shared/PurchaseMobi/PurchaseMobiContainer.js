import { connect } from 'react-redux';

import { getPublicKeyFor } from 'state/auth';
import { requestActions, getResponse } from 'state/requests';
import { accountActions } from 'state/account';
import { transfersActions } from 'state/transfers';

import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = state => ({
  paymentPath: getResponse(state, { operation: 'findBestPath' }),
  accountId: getPublicKeyFor(state),
});

const actions = {
  ...accountActions,
  ...transfersActions,
  ...requestActions,
};

export default connect(mapStateToProps, actions)(PurchaseMobi);
