import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { appActions, getAppAssetBalance } from 'state/apps';

import DappModal from './DappModal';

const mapStateToProps = (state, { app }) => ({
  mobiBalance: getAppAssetBalance(state, { appId: app.id }),
});

const actions = {
  ...appActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(DappModal);
