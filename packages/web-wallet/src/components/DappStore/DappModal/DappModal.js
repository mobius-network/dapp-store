import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import Modal from 'react-modal';

import { Container, Title } from './styles';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class DappModal extends Component {
  static propTypes = {
    app: object.isRequired,
    onClose: func.isRequired,
    isOpen: bool.isRequired,
    style: object,
  };

  onDeposit = () => {
    const { depositApp, app } = this.props;

    depositApp({
      amount: 3,
      app,
    });
  };

  render() {
    const {
      isOpen, style = customStyles, onClose, app,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Dapp modal"
        style={style}
      >
        <Title>{app.name}</Title>
        <button onClick={onClose}>close</button>
        <Container>
          <button>Go to App</button>
          <button onClick={this.onDeposit}>Deposit Funds</button>
        </Container>
      </Modal>
    );
  }
}

export default DappModal;
