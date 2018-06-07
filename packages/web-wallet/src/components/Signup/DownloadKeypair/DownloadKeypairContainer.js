import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { accountActions } from 'state/account';

import DownloadKeypair from './DownloadKeypair';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...accountActions,
};

export default connect(mapStateToProps, actions)(DownloadKeypair);
