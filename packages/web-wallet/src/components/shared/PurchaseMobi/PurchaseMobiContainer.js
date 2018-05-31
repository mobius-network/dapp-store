import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAccountId } from 'state/balance';

import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = createStructuredSelector({
  accountId: getAccountId,
});

export default connect(mapStateToProps)(PurchaseMobi);
