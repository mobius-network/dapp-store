import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { notificationsActions, getLastNotification } from 'state/notifications';

import Notifications from './Notifications';

const mapStateToProps = createStructuredSelector({
  notification: getLastNotification,
});

const actions = {
  ...notificationsActions,
};

export default connect(mapStateToProps, actions)(Notifications);
