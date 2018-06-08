import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { appActions } from 'state/apps';
import { getNativeBalance } from 'state/account';

import DepositModal from './DepositModal';

const mapStateToProps = createStructuredSelector({
  xlmBalance: getNativeBalance,
});

const actions = {
  ...appActions,
};

export default connect(mapStateToProps, actions)(DepositModal);
