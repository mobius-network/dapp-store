import { connect } from 'react-redux';

import { authActions } from 'state/auth';
import { getAssetBalance } from 'state/account';

import TransferXlm from './TransferXlm';

const mapStateToProps = state => ({
  balance: getAssetBalance(state, { asset: 'native' }),
});

const actions = {
  ...authActions,
};

export default connect(mapStateToProps, actions)(TransferXlm);
