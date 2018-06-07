import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { appActions } from 'state/apps';

import DappModal from './DappModal';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...appActions,
};

export default connect(mapStateToProps, actions)(DappModal);
