import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce, noop } from 'lodash';
import { toast } from 'react-toastify';
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
    addNotification: PropTypes.func.isRequired,
    bestPaymentPath: PropTypes.object,
    classname: PropTypes.string,
    fetchStart: PropTypes.func.isRequired,
    isBestPathFetching: PropTypes.bool.isRequired,
    onSuccess: PropTypes.func,
    resetRequest: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    transact: PropTypes.func.isRequired,
    xlmBalance: PropTypes.number,
  };

  static defaultProps = {
    isBestPathFetching: false,
    onSuccess: noop,
    xlmBalance: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      destAmount: '',
    };
    this.calculatePrice = debounce(this.calculatePrice, 800);
  }

  componentWillUnmount() {
    this.props.resetRequest('findBestPath');
  }

  calculatePrice(value) {
    const { accountId, fetchStart } = this.props;

    fetchStart({
      fetcher: findBestPath,
      name: 'findBestPath',
      deduplicate: true,
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
    const {
      accountId,
      addNotification,
      bestPaymentPath,
      onSuccess,
      xlmBalance,
    } = this.props;

    if (
      bestPaymentPath
      && parseFloat(bestPaymentPath.source_amount) > xlmBalance
    ) {
      addNotification({
        type: toast.TYPE.ERROR,
        message: 'Insufficient XLM balance',
      });

      return;
    }

    const operation = pathPayment({
      destAmount,
      destAsset: assets.mobi,
      destination: accountId,
    });

    const response = await this.props.pathPayment.mutate({ operation });

    onSuccess({ response, value: destAmount });
  };

  onAmountChange = ({ target: { value } }) => {
    this.setState({ destAmount: value }, () => {
      this.calculatePrice(value);
    });
  };

  renderPrice = () => {
    const { destAmount } = this.state;
    const { bestPaymentPath, isBestPathFetching, t } = this.props;

    if (isBestPathFetching) {
      return <Price>{t('purchaseMobi.calculating')}</Price>;
    }

    if (bestPaymentPath) {
      const price = parseFloat(bestPaymentPath.source_amount).toFixed(2);

      return (
        <Price>
          {t('purchaseMobi.approx')} <b>{parseFloat(price)} XLM</b>
        </Price>
      );
    }

    if (destAmount) {
      return null;
    }

    return <Price>{t('purchaseMobi.enterAmount')}</Price>;
  };

  render() {
    const { destAmount } = this.state;
    const {
      classname,
      isBestPathFetching,
      pathPayment: { loading },
      t,
    } = this.props;

    return (
      <Container className={classname}>
        <Title>{t('purchaseMobi.title')}</Title>
        <Caption>{t('purchaseMobi.caption')}</Caption>
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
                  disabled={!destAmount || loading || isBestPathFetching}
                  fullWidth
                  isLoading={loading || isBestPathFetching}
                  onClick={this.submitTransfer}
                  variant="secondary"
                >
                  {t('purchaseMobi.submitButton')}
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
