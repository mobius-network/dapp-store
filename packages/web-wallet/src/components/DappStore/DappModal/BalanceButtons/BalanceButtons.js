import React, { Component, Fragment } from 'react';
// import { string } from 'prop-types';

import Button from 'components/shared/Button';
import DepositModal from 'components/shared/DepositModal';
import { ButtonRow, AppBalance, AppBalanceAmount } from './styles';

class BalanceButtons extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  static defaultProps = {
    mobiBalance: 0,
  };

  state = {
    depositModalOpened: false,
  };

  openDepositModal = () => {
    this.setState({ depositModalOpened: true });
  };

  closeDepositModal = () => {
    this.setState({ depositModalOpened: false });
  };

  openApp = () => {
    const { openDapp, app } = this.props;

    openDapp(app);
  };

  render() {
    const { depositModalOpened } = this.state;

    const { app, mobiBalance, releaseAppBalance } = this.props;

    return (
      <Fragment>
        <ButtonRow>
          <Button onClick={this.openApp} fullWidth>
            Go to App
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button onClick={this.openDepositModal} fullWidth theme="secondary">
            Deposit Funds
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button
            fullWidth
            theme="secondary"
            onClick={releaseAppBalance.mutate}
            isLoading={releaseAppBalance.loading}
          >
            Release Funds
          </Button>
        </ButtonRow>
        <AppBalance>
          DApp balance: <AppBalanceAmount>{mobiBalance} MOBI</AppBalanceAmount>
        </AppBalance>

        <DepositModal
          app={app}
          isOpen={depositModalOpened}
          onClose={this.closeDepositModal}
        />
      </Fragment>
    );
  }
}

export default BalanceButtons;
