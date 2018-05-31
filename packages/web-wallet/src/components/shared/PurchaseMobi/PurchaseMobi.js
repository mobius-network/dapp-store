import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { debounce, noop } from 'lodash';
import { assets, stellarAccount, stellarTransfer } from '@mobius-network/core';

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
    paymentPath: null,
  };

  componentWillUnmount() {
    this.onCalculateSuccess = noop;
  }

  // eslint-disable-next-line react/sort-comp
  onCalculateSuccess(paymentPath, value) {
    if (value === this.state.destAmount) {
      this.setState({ paymentPath });
    }
  }

  async calculatePrice(value) {
    const { accountId } = this.props;

    const paymentPath = await stellarTransfer.findBestPath({
      source: accountId,
      destination: accountId,
      destinationAsset: assets.mobi,
      destinationAmount: value,
    });

    this.onCalculateSuccess(paymentPath, value);
  }

  debouncedCalculatePrice = debounce(this.calculatePrice, 800);

  // eslint-disable-next-line react/sort-comp
  onMobiChange = ({ target: { value } }) => {
    this.setState({ destAmount: value, paymentPath: null });

    this.debouncedCalculatePrice(value);
  };

  submitTransfer = async () => {
    const { destAmount } = this.state;
    const { accountId, onSuccess } = this.props;

    const pathPaymentOp = stellarTransfer.pathPayment({
      destination: accountId,
      destAsset: assets.mobi,
      destAmount,
    });

    const response = await stellarAccount.submitTransaction(pathPaymentOp);

    onSuccess({ response, value: destAmount });
  };

  render() {
    const { destAmount, paymentPath } = this.state;

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
