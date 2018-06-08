import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import Modal from 'react-modal';

import { Container, Title } from './styles';

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

class DepositModal extends Component {
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
      isOpen, style = customStyles, onClose, mobiBalance,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Deposit modal"
        style={style}
      >
        <Title>Deposit</Title>
        <button onClick={onClose}>close</button>
        <Container>
          <button onClick={this.onDeposit}>Deposit</button>
          <p>Available MOBI: {mobiBalance}</p>
          <p>
            Design is wrong, here we should show MOBI instead of XLM balance
          </p>
        </Container>
      </Modal>
    );
  }
}

export default DepositModal;
