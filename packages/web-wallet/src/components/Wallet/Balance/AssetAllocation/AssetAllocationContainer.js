import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { getAssetBalance } from 'state/account';
import { getAppAssetSumBalance } from 'state/apps';

import AssetAllocation from './AssetAllocation';

const mapStateToProps = createStructuredSelector({
  balance: getAssetBalance,
  appsBalance: getAppAssetSumBalance,
});

export default compose(connect(mapStateToProps), translate('translation'))(AssetAllocation);
