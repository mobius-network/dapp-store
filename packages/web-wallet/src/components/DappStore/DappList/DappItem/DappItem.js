import React, { Component } from 'react';
import { object } from 'prop-types';

import DappModal from 'components/DappStore/DappModal';
import { Container, Title } from './styles';

class DappItem extends Component {
  static propTypes = {
    app: object.isRequired,
  };

  state = {
    modalOpened: false,
  };

  openModal = () => {
    this.setState({ modalOpened: true });
  };

  closeModal = () => {
    this.setState({ modalOpened: false });
  };

  render() {
    const { app } = this.props;
    const { modalOpened } = this.state;

    return (
      <Container>
        <Title>{app.name}</Title>
        <button onClick={this.openModal}>Open Modal</button>

        <DappModal app={app} isOpen={modalOpened} onClose={this.closeModal} />
      </Container>
    );
  }
}

export default DappItem;
