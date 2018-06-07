import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAccountId } from 'state/account';

import TransferMobi from './TransferMobi';

const mapStateToProps = createStructuredSelector({
  accountId: getAccountId,
});

export default connect(mapStateToProps)(TransferMobi);
