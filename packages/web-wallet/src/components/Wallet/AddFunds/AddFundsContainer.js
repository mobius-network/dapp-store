import { connect } from 'react-redux';

import { getAssetBalance } from 'state/account';

import AddFunds from './AddFunds';

const mapStateToProps = (state, { match }) => ({
  balance: getAssetBalance(state, { asset: match.params.asset || 'mobi' }),
});

export default connect(mapStateToProps)(AddFunds);
