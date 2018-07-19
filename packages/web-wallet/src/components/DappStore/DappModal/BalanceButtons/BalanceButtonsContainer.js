import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';
import releaseAppBalanceSaga from 'state/sagas/releaseBalance';

import { restMutation } from 'components/hocs';
import { appActions, getAppAssetBalance } from 'state/apps';
import { getIsAuthorized } from 'state/auth';

import BalanceButtons from './BalanceButtons';

const mapStateToProps = createStructuredSelector({
  isAuthorized: getIsAuthorized,
  mobiAppBalance: (state, { app }) =>
    getAppAssetBalance(state, { appId: app.id }),
});

const actions = {
  ...appActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation'),
  restMutation({
    ...releaseAppBalanceSaga,
    options: ({ app }) => ({ app }),
  })
)(BalanceButtons);
