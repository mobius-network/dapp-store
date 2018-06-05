import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { debounce, noop } from 'lodash';
import { promisifyAction } from 'redux-yo';
import { assets, pathPayment } from '@mobius-network/core';

import { Container, Title } from './styles';

class PurchaseMobi extends Component {
  static propTypes = {
    accountId: string.isRequired,
    onSuccess: func,
  };

  static defaultProps = {
    onSuccess: noop,
  };

  state = {
    destAmount: 0,
  };

  calculatePrice(value) {
    const { accountId, findBestPath } = this.props;

    findBestPath({
      source: accountId,
      destination: accountId,
      destinationAmount: value,
      destinationAsset: assets.mobi,
    });
  }

  debouncedCalculatePrice = debounce(this.calculatePrice, 800);

  // eslint-disable-next-line react/sort-comp
  onMobiChange = ({ target: { value } }) => {
    this.setState({ destAmount: value });

    this.debouncedCalculatePrice(value);
  };

  submitTransfer = async () => {
    const { destAmount } = this.state;
    const { accountId, onSuccess, transact } = this.props;

    const pathPaymentOp = pathPayment({
      destination: accountId,
      destAsset: assets.mobi,
      destAmount,
    });

    const response = await promisifyAction(transact, pathPaymentOp);

    onSuccess({ response, value: destAmount });
  };

  render() {
    const { destAmount } = this.state;
    const { paymentPath } = this.props;

    return (
      <Container>
        <Title>Purchase MOBI</Title>

        <p>
          XLM price: {paymentPath ? paymentPath.source_amount : 'calculating'}
        </p>
        <input
          type="number"
          placeholder="mobi amount"
          value={destAmount}
          onChange={this.onMobiChange}
        />
        <button onClick={this.submitTransfer}>Submit transfer</button>
      </Container>
    );
  }
}

export default PurchaseMobi;
