import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getPublicKeyFor } from 'state/auth';
import { getResponse, getIsFetching, requestActions } from 'state/requests';
import { accountActions, getAssetBalance } from 'state/account';
import { transfersActions } from 'state/transfers';
import { notificationsActions } from 'state/notifications';

import { restMutation } from 'components/hocs';
import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = state => ({
  accountId: getPublicKeyFor(state),
  bestPaymentPath: getResponse(state, { operation: 'findBestPath' }),
  isBestPathFetching: getIsFetching(state, { operation: 'findBestPath' }),
  xlmBalance: getAssetBalance(state, { asset: 'native' }),
});

const actions = {
  ...accountActions,
  ...notificationsActions,
  ...requestActions,
  ...transfersActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation'),
  restMutation({
    name: 'pathPayment',
    action: accountActions.transact,
  })
)(PurchaseMobi);
