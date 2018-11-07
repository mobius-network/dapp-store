import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getApps } from 'state/apps';

import AppAllocations from './AppAllocations';

const mapStateToProps = state => ({
  apps: getApps(state),
});

export default compose(connect(mapStateToProps), translate('translation'))(AppAllocations);
