import { connect } from 'react-redux';

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

export default connect(mapStateToProps, actions)(ActionsDropdown);
