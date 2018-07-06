import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { translate } from 'react-i18next';

import { accountActions } from 'state/account';

import DownloadKeypair from './DownloadKeypair';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...accountActions,
};

export default compose(
  connect(mapStateToProps, actions),
  translate('translation')
)(DownloadKeypair);
