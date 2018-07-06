import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';
import CurrentAddress from 'components/shared/CurrentAddress';

import { WaitingTitle, WaitingCaption, CompleteMessage } from './styles';

class TransferXlm extends Component {
  static propTypes = {
    balance: PropTypes.number,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balance: 0,
  };

  componentDidMount() {
    this.props.watchAccount();
  }

  renderWaiting = () => {
    const { t } = this.props;

    return (
      <Fragment>
        <WaitingTitle>{t('transferXlm.waitingTitle')}</WaitingTitle>
        <WaitingCaption>{t('transferXlm.waitingCaption')}</WaitingCaption>
        <CurrentAddress />
      </Fragment>
    );
  };

  renderComplete = () => {
    const { t } = this.props;

    return (
      <Fragment>
        <CompleteMessage assetName="XLM" assetValue={this.props.balance} />
        <Button
          fullWidth
          to="/onboarding/mobi"
          onClick={this.props.completeAccountCreation}
        >
          {t('shared.continue')}
        </Button>
      </Fragment>
    );
  };

  render() {
    const { balance, t } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          title={t('transferXlm.title')}
          caption={
            <Fragment>
              {t('transferXlm.caption')} <b>3 XLM</b>.
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
