import React, { Component } from 'react';
// import { string } from 'prop-types';

import DappList from './DappList';
import { Container, Title } from './styles';

class DappStore extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>DappStore</Title>
        <DappList />
      </Container>
    );
  }
}

export default DappStore;
