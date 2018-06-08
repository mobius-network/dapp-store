import { connect } from 'react-redux';

import { getAppAssetBalance, appActions } from 'state/apps';

import AppAllocation from './AppAllocation';

const mapStateToProps = (state, { app: { id: appId } }) => ({
  mobiBalance: getAppAssetBalance(state, { appId, asset: 'mobi' }),
  xlmBalance: getAppAssetBalance(state, { appId, asset: 'native' }),
});

const actions = {
  ...appActions,
};

export default connect(mapStateToProps, actions)(AppAllocation);
