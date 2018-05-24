import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class Onboarding extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>Onboarding</Title>
      </Container>
    );
  }
}

export default Onboarding;
