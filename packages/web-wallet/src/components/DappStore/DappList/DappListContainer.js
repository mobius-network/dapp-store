import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestActions, getApps } from 'state/requests';

import DappList from './DappList';

const mapStateToProps = createStructuredSelector({
  apps: getApps,
});

const actions = {
  ...requestActions,
};

export default connect(mapStateToProps, actions)(DappList);
