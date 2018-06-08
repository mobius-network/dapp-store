import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class WithdrawFunds extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>WithdrawFunds</Title>
      </Container>
    );
  }
}

export default WithdrawFunds;
