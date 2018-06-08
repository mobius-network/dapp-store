import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAssetBalance } from 'state/account';
import { getAppAssetSumBalance } from 'state/apps';

import AssetAllocation from './AssetAllocation';

const mapStateToProps = createStructuredSelector({
  balance: getAssetBalance,
  appsBalance: getAppAssetSumBalance,
});

export default connect(mapStateToProps)(AssetAllocation);
