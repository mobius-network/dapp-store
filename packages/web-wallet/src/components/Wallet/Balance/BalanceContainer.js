import { connect } from 'react-redux';

import { getIsSuccess } from 'state/requests';
import { appActions } from 'state/apps';

import Balance from './Balance';

const mapStateToProps = state => ({
  appsLoaded: getIsSuccess(state, { operation: 'apps' }),
});

const actions = {
  ...appActions,
};

export default connect(mapStateToProps, actions)(Balance);
