import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { getMasterAccountDataEntry } from 'state/account';

import MyDapps from './MyDapps';

const mapStateToProps = createStructuredSelector({
  userAccountsCount: getMasterAccountDataEntry('appCount'),
});

export default compose(connect(mapStateToProps), translate('translation'))(MyDapps);
