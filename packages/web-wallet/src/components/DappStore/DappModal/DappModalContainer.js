import { connect } from 'react-redux';

import { appActions, getAppAssetBalance } from 'state/apps';

import DappModal from './DappModal';

const mapStateToProps = (state, { app }) => ({
  mobiBalance: getAppAssetBalance(state, { appId: app.id }),
});

const actions = {
  ...appActions,
};

export default connect(mapStateToProps, actions)(DappModal);
