import { connect } from 'react-redux';

import { requestActions, getResponse } from 'state/requests';
import { accountActions, getAccountId } from 'state/account';
import { transfersActions } from 'state/transfers';

import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = state => ({
  paymentPath: getResponse(state, { operation: 'findBestPath' }),
  accountId: getAccountId(state),
});

const actions = {
  ...accountActions,
  ...transfersActions,
  ...requestActions,
};

export default connect(mapStateToProps, actions)(PurchaseMobi);
