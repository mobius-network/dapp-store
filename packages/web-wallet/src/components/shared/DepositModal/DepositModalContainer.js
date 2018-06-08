import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { appActions } from 'state/apps';
import { getMobiBalance } from 'state/account';

import DepositModal from './DepositModal';

const mapStateToProps = createStructuredSelector({
  mobiBalance: getMobiBalance,
});

const actions = {
  ...appActions,
};

export default connect(mapStateToProps, actions)(DepositModal);
