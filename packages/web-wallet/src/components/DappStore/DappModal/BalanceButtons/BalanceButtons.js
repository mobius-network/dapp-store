import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';

import Button from 'components/shared/Button';
import ConfirmationModal from 'components/shared/ConfirmationModal';

import AppDepositForm from './AppDepositForm';
import { ButtonRow, AppBalance, AppBalanceAmount } from './styles';

class BalanceButtons extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    mobiAppBalance: PropTypes.number.isRequired,
    appAccount: PropTypes.object,
    openDapp: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    isAppOpening: PropTypes.bool,
    releaseAppBalance: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isAppOpening: false,
    mobiAppBalance: 0,
  };

  state = {
    depositFormActive: false,
    submitReserveConfirmationVisible: false,
  };

  showDepositForm = () => {
    this.setState({ depositFormActive: true });
  };

  hideDepositForm = () => {
    this.setState({ depositFormActive: false });
  };

  toggleSubmitReserveConfirmation = () =>
    this.setState({
      submitReserveConfirmationVisible: !this.state
        .submitReserveConfirmationVisible,
    });

  handleGoToAppClick = () => {
    const { app, openDapp, appAccount } = this.props;

    if (isNil(appAccount)) {
      this.toggleSubmitReserveConfirmation();

      return;
    }

    openDapp(app);
  };

  handleConfirmation = () => {
    const { app, openDapp } = this.props;

    this.setState({ submitReserveConfirmationVisible: false }, () =>
      openDapp(app));
  };

  render() {
    const { depositFormActive, submitReserveConfirmationVisible } = this.state;

    const {
      app,
      isAppOpening,
      isAuthorized,
      mobiAppBalance,
      releaseAppBalance,
      t,
    } = this.props;

    return (
      <Fragment>
        <ButtonRow>
          {isAuthorized ? (
            <Button
              fullWidth
              isLoading={isAppOpening}
              onClick={this.handleGoToAppClick}
            >
              {t('balanceButtons.goToAppButton')}
            </Button>
          ) : (
            <Button to="/login" fullWidth>
              {t('balanceButtons.goToAppUnauthorizedButton')}
            </Button>
          )}
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

        <ConfirmationModal
          isConfirming={isAppOpening}
          isOpen={submitReserveConfirmationVisible}
          onCancel={this.toggleSubmitReserveConfirmation}
          onConfirm={this.handleConfirmation}
          title={t('balanceButtons.submitReserveConfirmationTitle')}
        >
          {t('balanceButtons.submitReserveConfirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default BalanceButtons;
