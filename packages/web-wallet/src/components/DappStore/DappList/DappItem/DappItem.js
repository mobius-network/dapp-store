import React, { Component } from 'react';
import { string } from 'prop-types';

import DappModal from 'components/DappStore/DappModal';
import { Container, Title } from './styles';

class DappItem extends Component {
  static propTypes = {
    name: string.isRequired,
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
    const { name } = this.props;
    const { modalOpened } = this.state;

    return (
      <Container>
        <Title>{name}</Title>
        <button onClick={this.openModal}>Open Modal</button>

        <DappModal
          isOpen={modalOpened}
          onClose={this.closeModal}
          {...this.props}
        />
      </Container>
    );
  }
}

export default DappItem;
