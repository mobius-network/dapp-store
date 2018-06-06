import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class DappItem extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>DappItem</Title>
      </Container>
    );
  }
}

export default DappItem;
