import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class DappStore extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>DappStore</Title>
      </Container>
    );
  }
}

export default DappStore;
