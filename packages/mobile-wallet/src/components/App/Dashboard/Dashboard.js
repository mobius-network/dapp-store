import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Balances from './Balances';

import {
  Container,
  Gradient,
  Title,
  BalanceContainer,
  CurrencySymbol,
  BalanceAmount,
  ButtonRow,
  ActionButton,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    usdBalance: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balanceAmount: 0,
  };

  openReceiveScreen = () => this.props.navigation.navigate('AddFunds');

  openSendScreen = () => this.props.navigation.navigate('SendFunds');

  render() {
    const { t, usdBalance } = this.props;

    return (
      <Container>
        <Gradient>
          <Title>{t('dashboard.title')}</Title>

          <BalanceContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <BalanceAmount>{usdBalance}</BalanceAmount>
          </BalanceContainer>
        </Gradient>

        <Balances />

        <ButtonRow>
          <ActionButton
            square
            onPress={this.openReceiveScreen}
            title={t('dashboard.receiveButton').toUpperCase()}
          />
          <ActionButton
            square
            onPress={this.openSendScreen}
            title={t('dashboard.sendButton').toUpperCase()}
          />
        </ButtonRow>
      </Container>
    );
  }
}

export default Dashboard;
