import React, { Component } from 'react';
import { object } from 'prop-types';

import { Container, Title } from './styles';

class AppAllocation extends Component {
  static propTypes = {
    app: object.isRequired,
  };

  onRelaseBalance = () => {
    const { app, releaseBalance } = this.props;

    releaseBalance(app);
  };

  render() {
    const {
      app: { name },
      mobiBalance,
      xlmBalance,
    } = this.props;

    if (!xlmBalance && !mobiBalance) {
      return null;
    }

    return (
      <Container>
        <Title>{name}</Title>
        <Title>{mobiBalance} mobi</Title>
        <Title>{xlmBalance} xlm</Title>
        <button onClick={this.onRelaseBalance}>Release balance</button>
      </Container>
    );
  }
}

export default AppAllocation;
