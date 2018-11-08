import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getAssetBalance } from 'state/account';

import TransferMobi from './TransferMobi';

const mapStateToProps = state => ({
  balance: getAssetBalance(state, { asset: 'mobi' }),
});

export default compose(connect(mapStateToProps), translate('translation'))(TransferMobi);
