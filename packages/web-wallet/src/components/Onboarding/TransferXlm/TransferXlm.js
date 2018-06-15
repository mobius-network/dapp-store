import React, { Component, Fragment } from 'react';
import { number } from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import CurrentAddress from 'components/shared/CurrentAddress';

import { WaitingTitle, WaitingCaption, CompleteMessage } from './styles';

class TransferXlm extends Component {
  static propTypes = {
    balance: number,
  };

  static defaultProps = {
    balance: 0,
  };

  componentDidMount() {
    this.props.watchAccount();
  }

  renderWaiting = () => (
    <Fragment>
      <WaitingTitle>Transfer from External Wallet</WaitingTitle>
      <WaitingCaption>
        Use the following address to transfer XLM to your DApp Store wallet.
      </WaitingCaption>
      <CurrentAddress />
    </Fragment>
  );

  renderComplete = () => (
    <Fragment>
      <CompleteMessage assetName="XLM" assetValue={this.props.balance} />
      <Button
        fullWidth
        to="/onboarding/mobi"
        onClick={this.props.completeAccountCreation}
      >
        Continue
      </Button>
    </Fragment>
  );

  render() {
    const { balance } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          title="Transfer XLM"
          caption={
            <Fragment>
              DApp store transaction fees are charged from your XLM balance. You
              need to have a minimum balance of <b>3 XLM</b>.
            </Fragment>
          }
        />
        <Pane.Section>
          {balance > 0 ? this.renderComplete() : this.renderWaiting()}
        </Pane.Section>
      </Pane>
    );
  }
}

export default TransferXlm;
