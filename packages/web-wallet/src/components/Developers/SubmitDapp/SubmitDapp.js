import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class SubmitDapp extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>SubmitDapp</Title>
      </Container>
    );
  }
}

export default SubmitDapp;
