import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { balanceActions, getAccountId } from 'state/balance';

import TransferMobi from './TransferMobi';

const mapStateToProps = createStructuredSelector({
  accountId: getAccountId,
});

const actions = {
  ...balanceActions,
};

export default connect(mapStateToProps, actions)(TransferMobi);
