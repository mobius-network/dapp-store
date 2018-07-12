import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';

class Notifications extends Component {
  static propTypes = {
    deleteNotification: PropTypes.func.isRequired,
    notification: PropTypes.shape({
      id: PropTypes.string,
      message: PropTypes.string,
      type: PropTypes.string,
    }),
  };

  componentDidUpdate(prevProps) {
    const { notification, deleteNotification } = this.props;

    if (!notification) {
      return;
    }

    if ((prevProps.notification || {}).id === notification.id) {
      return;
    }

    toast(notification.message, {
      onClose: () => deleteNotification(notification),
      type: notification.type,
    });
  }

  render() {
    return (
      <Container>
        <ToastContainer
          autoClose={3000}
          hideProgressBar
          position={toast.POSITION.TOP_CENTER}
        />
      </Container>
    );
  }
}

export default Notifications;
