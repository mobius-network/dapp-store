import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import Modal from 'react-modal';

import DepositModal from 'components/shared/DepositModal';
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

  state = {
    depositModalOpened: false,
  };

  openDepositModal = () => {
    this.setState({ depositModalOpened: true });
  };

  closeDepositModal = () => {
    this.setState({ depositModalOpened: false });
  };

  openApp = () => {
    const { openDapp, app } = this.props;

    openDapp(app);
  };

  render() {
    const { depositModalOpened } = this.state;

    const {
      isOpen,
      style = customStyles,
      onClose,
      app,
      mobiBalance,
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
          <button onClick={this.openApp}>Go to App</button>
          <button onClick={this.openDepositModal}>
            Open DepositModal Modal
          </button>
          <p>Mobi balance: {mobiBalance}</p>
        </Container>

        <DepositModal
          app={app}
          isOpen={depositModalOpened}
          onClose={this.closeDepositModal}
        />
      </Modal>
    );
  }
}

export default DappModal;
