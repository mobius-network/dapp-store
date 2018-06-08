import React, { Component } from 'react';

import WithdrawForm from './WithdrawForm';
import { Container, Title } from './styles';

class WithdrawFunds extends Component {
  render() {
    return (
      <Container>
        <Title>Withdraw Funds</Title>
        <WithdrawForm asset="mobi" />
        <WithdrawForm asset="native" />
      </Container>
    );
  }
}

export default WithdrawFunds;
