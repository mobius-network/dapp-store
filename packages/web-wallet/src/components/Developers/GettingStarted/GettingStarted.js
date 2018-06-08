import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class GettingStarted extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>GettingStarted</Title>
      </Container>
    );
  }
}

export default GettingStarted;
