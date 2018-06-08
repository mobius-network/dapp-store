import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class ApiKey extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>ApiKey</Title>
      </Container>
    );
  }
}

export default ApiKey;
