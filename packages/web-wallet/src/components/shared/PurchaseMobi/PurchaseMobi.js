import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce, noop, isNil, isEqual } from 'lodash';
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
    classname: PropTypes.string,
    fetchStart: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    paymentPath: PropTypes.object,
    transact: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onSuccess: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      destAmount: '',
      calculating: false,
    };
    this.calculatePrice = debounce(this.calculatePrice, 800);
  }

  componentDidUpdate(prevProps) {
    if (isNil(this.props.paymentPath)) {
      return;
    }

    if (isEqual(this.props.paymentPath, prevProps.paymentPath)) {
      return;
    }

    this.setState({
      calculating: false,
    });
  }

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

  onAmountChange = ({ target: { value } }) => {
    this.setState({ destAmount: value, calculating: true }, () => {
      this.calculatePrice(value);
    });
  };

  renderPrice = () => {
    const { calculating } = this.state;
    const { paymentPath } = this.props;

    if (calculating) {
      return <Price>Calculating...</Price>;
    }

    if (paymentPath) {
      const price = parseFloat(paymentPath.source_amount).toFixed(2);

      return (
        <Price>
          Approximately <b>{parseFloat(price)} XLM</b>
        </Price>
      );
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
                onChange={this.onAmountChange}
                placeholder="0.0"
                type="number"
                value={destAmount}
              />
            </InputContainer>
            {this.renderPrice()}
          </Grid.Row>

          <Grid.Row>
            <Grid.Col width={1} px={0}>
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
