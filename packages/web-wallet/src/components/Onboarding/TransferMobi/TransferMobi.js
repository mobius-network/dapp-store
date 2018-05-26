import React, { Component } from 'react';
// import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { stellarBalance, stellarServer } from '@mobius-network/core';

import { Container, Title } from './styles';

class TransferMobi extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  state = {
    mobi: 0,
  };

  handleMobiChange = ({ target: { value } }) => {
    const { accountId } = this.props;

    this.setState({ mobi: value });

    stellarServer
      .paths(accountId, accountId, stellarBalance.mobi(), value)
      .limit(5)
      .call()
      .then(resp => {
        const minPrice = Math.min(...resp.records.map(path => path.source_amount));

        console.log(minPrice);
      });
  };

  render() {
    const { mobi } = this.state;
    const { accountId } = this.props;

    return (
      <Container>
        <Title>TransferMobi</Title>
        <p>{accountId}</p>

        <input
          type="number"
          placeholder="mobi amount"
          value={mobi}
          onChange={this.handleMobiChange}
        />
        <Link to="/">Browse DApp store</Link>
      </Container>
    );
  }
}

export default TransferMobi;
