import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getAssetBalance } from 'state/account';

import AddFunds from './AddFunds';

const mapStateToProps = (state, { match }) => ({
  balance: getAssetBalance(state, { asset: match.params.asset || 'mobi' }),
});

export default compose(connect(mapStateToProps), translate('translation'))(AddFunds);
