import { connect } from 'react-redux';

import { getAssetBalance } from 'state/account';

import TransferXlm from './TransferXlm';

const mapStateToProps = state => ({
  balance: getAssetBalance(state, { asset: 'native' }),
});

export default connect(mapStateToProps)(TransferXlm);
