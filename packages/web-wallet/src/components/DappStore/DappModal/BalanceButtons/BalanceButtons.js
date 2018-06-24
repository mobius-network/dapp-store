import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import AppDepositForm from './AppDepositForm';
import { ButtonRow, AppBalance, AppBalanceAmount } from './styles';

class BalanceButtons extends Component {
  static propTypes = {
    openDapp: PropTypes.func.isRequired,
    mobiAppBalance: PropTypes.number.isRequired,
    app: PropTypes.object.isRequired,
    releaseAppBalance: PropTypes.object.isRequired,
  };

  static defaultProps = {
    mobiAppBalance: 0,
  };

  state = {
    depositFormActive: false,
  };

  showDepositForm = () => {
    this.setState({ depositFormActive: true });
  };

  hideDepositForm = () => {
    this.setState({ depositFormActive: false });
  };

  openApp = () => {
    const { openDapp, app } = this.props;

    openDapp(app);
  };

  render() {
    const { depositFormActive } = this.state;

    const { app, mobiAppBalance, releaseAppBalance } = this.props;

    return (
      <Fragment>
        <ButtonRow>
          <Button onClick={this.openApp} fullWidth>
            Go to App
          </Button>
        </ButtonRow>

        <ButtonRow>
          {depositFormActive ? (
            <AppDepositForm app={app} onSuccess={this.hideDepositForm} />
          ) : (
            <Button onClick={this.showDepositForm} fullWidth theme="secondary">
              Deposit Funds
            </Button>
          )}
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
          DApp balance:{' '}
          <AppBalanceAmount>{mobiAppBalance} MOBI</AppBalanceAmount>
        </AppBalance>
      </Fragment>
    );
  }
}

export default BalanceButtons;
