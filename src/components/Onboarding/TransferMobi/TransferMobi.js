import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Tabs from 'components/shared/Tabs';
import Button from 'components/shared/Button';
import CurrentAddress from 'components/shared/CurrentAddress';
import PurchaseMobi from 'components/shared/PurchaseMobi';

import { CompleteMessage, WaitingTitle, WaitingCaption } from './styles';

class TransferMobi extends Component {
  static propTypes = {
    balance: PropTypes.number,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    balance: 0,
  };

  renderPurchase = () => {
    const { t } = this.props;

    return (
      <Tabs>
        <Tabs.Tab fluid title={t('transferMobi.purchaseTabTitle')}>
          <Pane.Section>
            <PurchaseMobi />
          </Pane.Section>
        </Tabs.Tab>
        <Tabs.Tab fluid title={t('transferMobi.externalTransferTabTitle')}>
          <Pane.Section>
            <WaitingTitle>
              {t('transferMobi.externalTransferTitle')}
            </WaitingTitle>
            <WaitingCaption>
              {t('transferMobi.externalTransferCaption')}
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
          assetName="MOBI"
          assetValue={this.props.balance}
          message={t('transferMobi.completeText')}
        />
        <Button fullWidth to="/">
          {t('transferMobi.completeButton')}
        </Button>
      </Pane.Section>
    );
  };

  render() {
    const { balance, t } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          caption={t('transferMobi.caption')}
          title={t('transferMobi.title')}
        />

        {balance > 0 ? this.renderComplete() : this.renderPurchase()}
      </Pane>
    );
  }
}

export default TransferMobi;
