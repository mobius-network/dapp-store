import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { authActions } from 'state/auth';
import { getAssetBalance } from 'state/account';

import TransferXlm from './TransferXlm';

const mapStateToProps = state => ({
  balance: getAssetBalance(state, { asset: 'native' }),
});

const actions = {
  ...authActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(TransferXlm);
