import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestActions, getLastError } from 'state/requests';

import Notifications from './Notifications';

const mapStateToProps = createStructuredSelector({
  error: getLastError,
});

const actions = {
  ...requestActions,
};

export default connect(mapStateToProps, actions)(Notifications);
