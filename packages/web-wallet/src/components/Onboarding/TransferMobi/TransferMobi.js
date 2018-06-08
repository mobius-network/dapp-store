import React, { Component } from 'react';
import { number } from 'prop-types';

import Pane from 'components/shared/Pane';
import Tabs from 'components/shared/Tabs';
import Button from 'components/shared/Button';
import CurrentAddress from 'components/shared/CurrentAddress';
import PurchaseMobi from 'components/shared/PurchaseMobi';

import { CompleteMessage, WaitingTitle, WaitingCaption } from './styles';

class TransferMobi extends Component {
  static propTypes = {
    balance: number,
  };

  static defaultProps = {
    balance: 0,
  };

  renderPurchase = () => (
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
            Use the following address to transfer MOBI to your DApp Store
            wallet.
          </WaitingCaption>
          <CurrentAddress />
        </Pane.Section>
      </Tabs.Tab>
    </Tabs>
  );

  renderComplete = () => (
    <Pane.Section>
      <CompleteMessage
        assetName="MOBI"
        assetValue={this.props.balance}
        message="Added successfully!"
      />
      <Button fullWidth to="/">
        Browse DApp store
      </Button>
    </Pane.Section>
  );

  render() {
    const { balance } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          title="Add MOBI"
          caption="You’ll use your MOBI to make purchases within DApps."
        />

        {balance > 0 ? this.renderComplete() : this.renderPurchase()}
      </Pane>
    );
  }
}

export default TransferMobi;
