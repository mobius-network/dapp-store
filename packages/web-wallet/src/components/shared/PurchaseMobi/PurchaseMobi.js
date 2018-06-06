import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { debounce, noop } from 'lodash';
import { promisifyAction } from 'redux-yo';
import { assets, pathPayment, findBestPath } from '@mobius-network/core';

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
    calculating: false,
  };

  calculatePrice(value) {
    const { accountId, fetchStart } = this.props;

    fetchStart({
      name: 'findBestPath',
      fetcher: findBestPath,
      payload: {
        source: accountId,
        destination: accountId,
        destinationAmount: value,
        destinationAsset: assets.mobi,
      },
    });
  }

  debouncedCalculatePrice = debounce(this.calculatePrice, 800);

  // eslint-disable-next-line react/sort-comp
  onMobiChange = ({ target: { value } }) => {
    this.setState({ destAmount: value, calculating: true });

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

    const response = await promisifyAction(transact, {
      name: 'pathPayment',
      operation: pathPaymentOp,
    });

    onSuccess({ response, value: destAmount });
  };

  render() {
    const { destAmount, calculating } = this.state;
    const { paymentPath } = this.props;

    const pricePlaceholder = calculating ? 'calculating' : 'enter mobi amount';

    return (
      <Container>
        <Title>Purchase MOBI</Title>

        <p>
          XLM price:{' '}
          {paymentPath ? paymentPath.source_amount : pricePlaceholder}
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
