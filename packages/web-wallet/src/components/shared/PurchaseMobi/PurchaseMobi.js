import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce, noop } from 'lodash';
import { promisifyAction } from 'redux-yo';
import { assets, pathPayment, findBestPath } from '@mobius-network/core';

import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';

import {
  Container,
  Title,
  Caption,
  Price,
  Input,
  InputContainer,
  ButtonContainer,
} from './styles';

class PurchaseMobi extends Component {
  static propTypes = {
    accountId: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    classname: PropTypes.string,
  };

  static defaultProps = {
    onSuccess: noop,
  };

  state = {
    destAmount: '',
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

  renderPrice = () => {
    const { destAmount, calculating } = this.state;
    const { paymentPath } = this.props;

    if (paymentPath) {
      const price = parseFloat(destAmount * parseFloat(paymentPath.source_amount)).toFixed(2);

      return (
        <Price>
          Approximately <b>{parseFloat(price)} XLM</b>
        </Price>
      );
    }

    if (calculating) {
      return <Price>Calculating...</Price>;
    }

    return <Price>Enter MOBI amount</Price>;
  };

  render() {
    const { destAmount } = this.state;
    const { classname } = this.props;

    return (
      <Container className={classname}>
        <Title>Purchase MOBI</Title>
        <Caption>Use your XLM balance to purchase MOBI.</Caption>
        <Grid>
          <Grid.Row alignItems="center">
            <InputContainer>
              <Input
                onChange={this.onMobiChange}
                placeholder="0.0"
                type="number"
                value={destAmount}
              />
            </InputContainer>
            {this.renderPrice()}
          </Grid.Row>

          <Grid.Row>
            <Grid.Col width={1 / 2} px={0}>
              <ButtonContainer>
                <Button
                  theme="secondary"
                  onClick={this.submitTransfer}
                  fullWidth
                  disabled={!destAmount}
                >
                  Submit transfer
                </Button>
              </ButtonContainer>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default PurchaseMobi;
