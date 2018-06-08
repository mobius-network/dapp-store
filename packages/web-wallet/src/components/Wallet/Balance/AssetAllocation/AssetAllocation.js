import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';

import { Container, Title } from './styles';

class AssetAllocation extends Component {
  static propTypes = {
    asset: string.isRequired,
    balance: number.isRequired,
  };

  render() {
    const { asset, balance, appsBalance } = this.props;

    return (
      <Container>
        <Title>
          {balance} {asset}
        </Title>
        <Title>
          {appsBalance} {asset} Allocated in Dapps
        </Title>
        <Link to={`/wallet/add/${asset}`}> Transfer {asset}</Link>
      </Container>
    );
  }
}

export default AssetAllocation;
