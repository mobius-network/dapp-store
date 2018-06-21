import { compose } from 'redux';
import { connect } from 'react-redux';
import releaseAppBalanceSaga from 'state/sagas/releaseBalance';

import { restMutation } from 'components/hocs';
import { getAppAssetBalance } from 'state/apps';

import AppAllocation from './AppAllocation';

const mapStateToProps = (state, { app: { id: appId } }) => ({
  mobiBalance: getAppAssetBalance(state, { appId, asset: 'mobi' }),
  xlmBalance: getAppAssetBalance(state, { appId, asset: 'native' }),
});

export default compose(
  connect(mapStateToProps),
  restMutation({
    ...releaseAppBalanceSaga,
    options: ({ app }) => ({ app }),
  })
)(AppAllocation);
