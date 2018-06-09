import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestActions, getApps } from 'state/requests';
import { appActions } from 'state/apps';

import DappStore from './DappStore';

const mapStateToProps = createStructuredSelector({
  apps: getApps,
});

const actions = {
  ...requestActions,
  ...appActions,
};

export default connect(mapStateToProps, actions)(DappStore);
