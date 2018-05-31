import React, { Component } from 'react';
import { string } from 'prop-types';

import { Container, Title } from './styles';

class CurrentAddress extends Component {
  static propTypes = {
    publicKey: string.isRequired,
  };

  render() {
    const { publicKey } = this.props;

    return (
      <Container>
        <Title>Waiting for transfer</Title>
        <p>{publicKey}</p>
      </Container>
    );
  }
}

export default CurrentAddress;
