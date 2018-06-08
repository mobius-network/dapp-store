import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class WithdrawForm extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>WithdrawForm</Title>
      </Container>
    );
  }
}

export default WithdrawForm;
