import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestActions, getResponse } from 'state/requests';
import { balanceActions, getAccountId } from 'state/balance';
import { transfersActions } from 'state/transfers';

import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = createStructuredSelector({
  paymentPath: getResponse('findBestPath'),
  accountId: getAccountId,
});

const actions = {
  ...balanceActions,
  ...transfersActions,
  ...requestActions,
};

export default connect(mapStateToProps, actions)(PurchaseMobi);
