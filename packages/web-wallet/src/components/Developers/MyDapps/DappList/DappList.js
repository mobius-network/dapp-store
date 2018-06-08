import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class DappList extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>DappList</Title>
      </Container>
    );
  }
}

export default DappList;
