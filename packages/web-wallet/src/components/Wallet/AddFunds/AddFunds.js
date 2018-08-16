import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

import Pane from 'components/shared/Pane';
import Tabs from 'components/shared/Tabs';
import Button from 'components/shared/Button';
import CurrentAddress from 'components/shared/CurrentAddress';
import PurchaseMobi from 'components/shared/PurchaseMobi';

import { CompleteMessage, WaitingTitle, WaitingCaption } from './styles';

class AddFunds extends Component {
  static propTypes = {
    balance: PropTypes.number,
    t: PropTypes.func.isRequired,
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

  resetForm = () => {
    this.setState({ delta: 0 });
  };

  getAssetName = () => this.props.match.params.asset === 'native' ? 'XLM' : 'MOBI';

  onTabChange = index => (this.currentTabIndex = index);

  renderPurchase = () => {
    const { match, t } = this.props;

    if (match.params.asset === 'native') {
      return (
        <Pane.Section>
          <WaitingTitle>{t('addFunds.waitingTitle')}</WaitingTitle>
          <WaitingCaption>
            <Trans i18nKey="addFunds.waitingText">{this.getAssetName()}</Trans>
          </WaitingCaption>
          <CurrentAddress />
        </Pane.Section>
      );
    }

    return (
      <Tabs
        onTabChange={this.onTabChange}
        defaultTabIndex={this.currentTabIndex}
      >
        <Tabs.Tab title="Use XLM" fluid>
          <Pane.Section>
            <PurchaseMobi />
          </Pane.Section>
        </Tabs.Tab>
        <Tabs.Tab title="External Transfer" fluid>
          <Pane.Section>
            <WaitingTitle>{t('addFunds.waitingTitle')}</WaitingTitle>
            <WaitingCaption>
              <Trans i18nKey="addFunds.waitingText">
                {this.getAssetName()}
              </Trans>
            </WaitingCaption>
            <CurrentAddress />
          </Pane.Section>
        </Tabs.Tab>
      </Tabs>
    );
  };

  renderComplete = () => {
    const { t } = this.props;

    return (
      <Pane.Section>
        <CompleteMessage
          assetName={this.getAssetName()}
          assetValue={this.state.delta}
          message={t('addFunds.completeText')}
        />
        <Button theme="secondary" onClick={this.resetForm} fullWidth>
          {t('addFunds.completeButton')}
        </Button>
      </Pane.Section>
    );
  };

  render() {
    const { delta } = this.state;
    const { t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header title={`${t('addFunds.title')} ${this.getAssetName()}`} />

        {delta > 0 ? this.renderComplete() : this.renderPurchase()}
      </Pane>
    );
  }
}

export default AddFunds;
