import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class AddFunds extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>AddFunds</Title>
      </Container>
    );
  }
}

export default AddFunds;
