import { compose } from 'redux';
import { connect } from 'react-redux';

import { getPublicKeyFor } from 'state/auth';
import { requestActions } from 'state/requests';
import { accountActions } from 'state/account';
import { transfersActions } from 'state/transfers';

import { restMutation } from 'components/hocs';
import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = state => ({
  accountId: getPublicKeyFor(state),
});

const actions = {
  ...accountActions,
  ...transfersActions,
  ...requestActions,
};

export default compose(
  connect(mapStateToProps, actions),
  restMutation({
    name: 'pathPayment',
    action: accountActions.transact,
  })
)(PurchaseMobi);
