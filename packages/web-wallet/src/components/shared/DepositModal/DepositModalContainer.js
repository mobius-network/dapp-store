import { compose } from 'redux';
import { connect } from 'react-redux';

import { requestActions } from 'state/requests';
import { appActions } from 'state/apps';
import { getMobiBalance } from 'state/account';

import { restMutation } from 'components/hocs';
import DepositModal from './DepositModal';

const mapStateToProps = state => ({
  mobiBalance: getMobiBalance(state),
});

const actions = {
  ...appActions,
  ...requestActions,
};

export default compose(
  connect(mapStateToProps, actions),
  restMutation({
    name: 'depositApp',
    action: appActions.depositApp,
  })
)(DepositModal);
