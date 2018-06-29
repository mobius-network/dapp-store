import { connect } from 'react-redux';

import { getApps } from 'state/apps';

import AppAllocations from './AppAllocations';

const mapStateToProps = state => ({
  apps: getApps(state),
});

export default connect(mapStateToProps)(AppAllocations);
