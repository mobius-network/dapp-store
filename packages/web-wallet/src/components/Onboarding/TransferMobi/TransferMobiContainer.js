import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAccountId } from 'state/balance';

import TransferMobi from './TransferMobi';

const mapStateToProps = createStructuredSelector({
  accountId: getAccountId,
});

export default connect(mapStateToProps)(TransferMobi);
