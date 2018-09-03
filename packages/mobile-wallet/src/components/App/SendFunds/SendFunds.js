import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActionSheet from 'react-native-custom-actionsheet';
import Keyboard from 'components/Auth/PinSetup/PinPad/Keyboard';

import {
  Container,
  Asset,
  UsdAmount,
  Amount,
  FormFields,
  SubmitButton,
} from './styles';

class SendFunds extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    usdPrice: PropTypes.number.isRequired,
    asset: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    saveAmount: PropTypes.func.isRequired,
    setAsset: PropTypes.func.isRequired,
  };

  static defaultProps = {
    asset: 'native',
  };

  state = {
    amount: '',
    valid: false,
  };

  submitAmount = () => {
    const { amount } = this.state;
    const { saveAmount, navigation } = this.props;

    saveAmount(amount);
    navigation.navigate('AddressForm');
  };

  options = [this.props.t('addFunds.selectWallet.cancel'), 'MOBI', 'XLM'];

  showActionSheet = () => this.actionSheet.show();

  setActionSheetRef = ref => (this.actionSheet = ref);

  handleAssetChange = index =>
    this.props.setAsset(this.options[index].toLowerCase());

  handleKeyboardChange = amount => {
    const valid = amount > 0 && amount < this.props.balance;

    this.setState({ amount, valid });
  };

  render() {
    const { amount, valid } = this.state;
    const { t, asset, usdPrice } = this.props;

    const usdAmount = (amount * usdPrice).toFixed(2);

    return (
      <Container>
        <FormFields>
          <Amount>{amount.length ? amount : '0'}</Amount>
          <Asset>{asset.toUpperCase()}</Asset>
          <UsdAmount>≈ ${usdAmount} USD</UsdAmount>

          <Amount onPress={this.showActionSheet}>Change asset</Amount>
        </FormFields>

        <Keyboard
          pin={amount}
          pinLength={99}
          onChange={this.handleKeyboardChange}
        />

        <SubmitButton
          disabled={!valid}
          title={t('sendFunds.submitButton')}
          onPress={this.submitAmount}
        />

        <ActionSheet
          ref={this.setActionSheetRef}
          title={t('addFunds.selectWallet.title')}
          options={this.options}
          cancelButtonIndex={0}
          destructiveButtonIndex={3}
          onPress={this.handleAssetChange}
        />
      </Container>
    );
  }
}

export default SendFunds;
