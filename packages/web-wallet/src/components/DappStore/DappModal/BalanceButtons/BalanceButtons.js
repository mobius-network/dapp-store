import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/shared/Button';
import AppDepositForm from './AppDepositForm';
import { ButtonRow, AppBalance, AppBalanceAmount } from './styles';

class BalanceButtons extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    mobiAppBalance: PropTypes.number.isRequired,
    openDapp: PropTypes.func.isRequired,
    releaseAppBalance: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
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

    const {
      app, mobiAppBalance, releaseAppBalance, t,
    } = this.props;

    return (
      <Fragment>
        <ButtonRow>
          <Button
            disabled={mobiAppBalance === 0}
            onClick={this.openApp}
            fullWidth
          >
            Go to App
          </Button>
        </ButtonRow>

        <ButtonRow>
          {depositFormActive ? (
            <AppDepositForm app={app} onSuccess={this.hideDepositForm} />
          ) : (
            <Button onClick={this.showDepositForm} fullWidth theme="secondary">
              {t('balanceButtons.depositFunds')}
            </Button>
          )}
        </ButtonRow>

        {mobiAppBalance > 0 && (
          <ButtonRow>
            <Button
              fullWidth
              theme="secondary"
              onClick={releaseAppBalance.mutate}
              isLoading={releaseAppBalance.loading}
            >
              {t('balanceButtons.releaseFunds')}
            </Button>
          </ButtonRow>
        )}

        <AppBalance>
          {t('balanceButtons.balance')}
          <AppBalanceAmount>{mobiAppBalance} MOBI</AppBalanceAmount>
        </AppBalance>
      </Fragment>
    );
  }
}

export default BalanceButtons;
