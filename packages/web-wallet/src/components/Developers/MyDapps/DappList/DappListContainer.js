import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getMasterAccountDataEntry } from 'state/account';
import { storeAccountActions } from 'state/storeAccount';
import { getIsSuccess } from 'state/requests';

import DappList from './DappList';

const mapStateToProps = createStructuredSelector({
  isStoreAccountLoaded: state =>
    getIsSuccess(state, { operation: 'loadStoreAccount' }),
  userAccountsCount: getMasterAccountDataEntry('appCount'),
});

const actions = {
  ...storeAccountActions,
};

export default connect(mapStateToProps, actions)(DappList);
