import { connect } from 'react-redux';

import { getAssetBalance } from 'state/account';

import TransferMobi from './TransferMobi';

const mapStateToProps = state => ({
  balance: getAssetBalance(state, { asset: 'mobi' }),
});

export default connect(mapStateToProps)(TransferMobi);
