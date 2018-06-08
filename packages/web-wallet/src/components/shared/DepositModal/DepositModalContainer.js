import { connect } from 'react-redux';

import { requestActions, getIsFetching, getIsSuccess } from 'state/requests';
import { appActions } from 'state/apps';
import { getMobiBalance } from 'state/account';

import DepositModal from './DepositModal';

const mapStateToProps = state => ({
  mobiBalance: getMobiBalance(state),
  depositInProgress: getIsFetching(state, { operation: 'depositApp' }),
  depositCompleted: getIsSuccess(state, { operation: 'depositApp' }),
});

const actions = {
  ...appActions,
  ...requestActions,
};

export default connect(mapStateToProps, actions)(DepositModal);
