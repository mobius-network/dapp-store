import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';

class Notifications extends Component {
  static propTypes = {
    deleteError: PropTypes.func.isRequired,
    error: PropTypes.shape({
      id: PropTypes.string,
      message: PropTypes.string,
    }),
  };

  componentDidUpdate(prevProps) {
    const { error, deleteError } = this.props;

    if (!error) {
      return;
    }

    if ((prevProps.error || {}).id === error.id) {
      return;
    }

    toast(error.message, {
      onClose: () => deleteError(error),
      type: toast.TYPE.ERROR,
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
