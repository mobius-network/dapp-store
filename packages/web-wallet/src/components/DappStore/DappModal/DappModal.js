import React, { Component } from 'react';
import { string, object, bool, func } from 'prop-types';
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
    name: string.isRequired,
    onClose: func.isRequired,
    isOpen: bool.isRequired,
    style: object,
  };

  render() {
    const {
      isOpen, style = customStyles, onClose, name,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Dapp modal"
        style={style}
      >
        <Title>{name}</Title>
        <button onClick={onClose}>close</button>
        <Container>
          <button>Go to App</button>
          <button>Deposit Funds</button>
        </Container>
      </Modal>
    );
  }
}

export default DappModal;
