import { connect } from 'react-redux';

import { getApps } from 'state/requests';

import AppAllocations from './AppAllocations';

const mapStateToProps = state => ({
  apps: getApps(state),
});

const actions = {};

export default connect(mapStateToProps, actions)(AppAllocations);
