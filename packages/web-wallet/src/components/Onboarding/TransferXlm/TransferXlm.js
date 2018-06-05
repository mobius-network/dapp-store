import React, { Component } from 'react';
import { number } from 'prop-types';
import { Link } from 'react-router-dom';
import CurrentAddress from 'components/shared/CurrentAddress';

import { Container, Title } from './styles';

class TransferXlm extends Component {
  static propTypes = {
    balance: number,
  };

  static defaultProps = {
    balance: 0,
  };

  render() {
    const { balance } = this.props;

    return (
      <Container>
        <CurrentAddress />
        <Title>Current balance: {balance}</Title>
        <Link to="/onboarding/mobi">Continue</Link>
      </Container>
    );
  }
}

export default TransferXlm;
