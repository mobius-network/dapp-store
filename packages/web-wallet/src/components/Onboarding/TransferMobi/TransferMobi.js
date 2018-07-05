import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

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
        <Tabs.Tab title={t('transferMobi.purchaseTabTitle')} fluid>
          <Pane.Section>
            <PurchaseMobi />
          </Pane.Section>
        </Tabs.Tab>
        <Tabs.Tab title={t('transferMobi.externalTransferTabTitle')} fluid>
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
          title={t('transferMobi.title')}
          caption={t('transferMobi.caption')}
        />

        {balance > 0 ? this.renderComplete() : this.renderPurchase()}
      </Pane>
    );
  }
}

export default translate()(TransferMobi);
