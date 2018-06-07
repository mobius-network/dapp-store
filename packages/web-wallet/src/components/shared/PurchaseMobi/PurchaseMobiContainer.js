import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestActions, getResponse } from 'state/requests';
import { accountActions, getAccountId } from 'state/account';
import { transfersActions } from 'state/transfers';

import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = createStructuredSelector({
  paymentPath: getResponse('findBestPath'),
  accountId: getAccountId,
});

const actions = {
  ...accountActions,
  ...transfersActions,
  ...requestActions,
};

export default connect(mapStateToProps, actions)(PurchaseMobi);
