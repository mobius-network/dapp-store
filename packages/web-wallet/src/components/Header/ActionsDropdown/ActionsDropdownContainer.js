import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { authActions } from 'state/auth';
import { getAssetBalance } from 'state/account';

import ActionsDropdown from './ActionsDropdown';

const mapStateToProps = state => ({
  mobiBalance: getAssetBalance(state, { asset: 'mobi' }),
  xlmBalance: getAssetBalance(state, { asset: 'native' }),
});

const actions = {
  ...authActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(ActionsDropdown);
