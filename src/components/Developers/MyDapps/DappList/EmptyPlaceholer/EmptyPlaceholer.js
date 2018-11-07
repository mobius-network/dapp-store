import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class EmptyPlaceholer extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>EmptyPlaceholer</Title>
      </Container>
    );
  }
}

export default EmptyPlaceholer;
