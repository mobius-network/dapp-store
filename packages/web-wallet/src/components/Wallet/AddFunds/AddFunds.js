import React, { Component } from 'react';
import { number } from 'prop-types';

import Pane from 'components/shared/Pane';
import Tabs from 'components/shared/Tabs';
import Button from 'components/shared/Button';
import CurrentAddress from 'components/shared/CurrentAddress';
import PurchaseMobi from 'components/shared/PurchaseMobi';

import { CompleteMessage, WaitingTitle, WaitingCaption } from './styles';

class AddFunds extends Component {
  static propTypes = {
    balance: number,
  };

  static defaultProps = {
    balance: 0,
  };

  state = {
    delta: 0,
    balance: this.props.balance,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.balance === state.balance) {
      return null;
    }

    return {
      balance: props.balance,
      delta: props.balance - state.balance,
    };
  }

  componentDidMount() {
    this.resetPathPayment();
  }

  resetPathPayment = () => {
    this.props.resetRequest('pathPayment');
  };

  getAssetName = () =>
    this.props.match.params.asset === 'native' ? 'XLM' : 'MOBI';

  renderPurchase = () =>
    this.props.match.params.asset === 'native' ? (
      <Pane.Section>
        <WaitingTitle>Transfer from External Wallet</WaitingTitle>
        <WaitingCaption>
          Use the following address to transfer {this.getAssetName()} to your
          DApp Store wallet.
        </WaitingCaption>
        <CurrentAddress />
      </Pane.Section>
    ) : (
      <Tabs>
        <Tabs.Tab title="Use XLM" fluid>
          <Pane.Section>
            <PurchaseMobi />
          </Pane.Section>
        </Tabs.Tab>
        <Tabs.Tab title="External Transfer" fluid>
          <Pane.Section>
            <WaitingTitle>Transfer from External Wallet</WaitingTitle>
            <WaitingCaption>
              Use the following address to transfer {this.getAssetName()} to
              your DApp Store wallet.
            </WaitingCaption>
            <CurrentAddress />
          </Pane.Section>
        </Tabs.Tab>
      </Tabs>
    );

  renderComplete = () => (
    <Pane.Section>
      <CompleteMessage
        assetName={this.getAssetName()}
        assetValue={this.state.delta}
        message="Added successfully!"
      />
      <Button theme="secondary" onClick={this.resetPathPayment} fullWidth>
        Done
      </Button>
    </Pane.Section>
  );

  render() {
    const { delta } = this.state;
    const { pathPaymentCompleted } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header title={`Add ${this.getAssetName()}`} />

        {delta > 0 && pathPaymentCompleted
          ? this.renderComplete()
          : this.renderPurchase()}
      </Pane>
    );
  }
}

export default AddFunds;
