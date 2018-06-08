import { connect } from 'react-redux';

import { getAssetBalance } from 'state/balance';

import TransferMobi from './TransferMobi';

const mapStateToProps = state => ({
  balance: getAssetBalance(state, { asset: 'mobi' }),
});

export default connect(mapStateToProps)(TransferMobi);
