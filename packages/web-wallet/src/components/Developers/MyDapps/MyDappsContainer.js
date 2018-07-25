import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { storeAccountActions } from 'state/storeAccount';
import { getMasterAccountDataEntry } from 'state/account';

import MyDapps from './MyDapps';

const mapStateToProps = createStructuredSelector({
  userAccountsCount: getMasterAccountDataEntry('appCount'),
});

const actions = {
  ...storeAccountActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(MyDapps);
