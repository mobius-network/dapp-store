import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { balanceActions } from 'state/balance';

import DownloadKeypair from './DownloadKeypair';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...balanceActions,
};

export default connect(mapStateToProps, actions)(DownloadKeypair);
