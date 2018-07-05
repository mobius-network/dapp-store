import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Pane from 'components/shared/Pane';
import Tabs from 'components/shared/Tabs';
import WithdrawForm from './WithdrawForm';

class WithdrawFunds extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header
          title={t('withdrawFunds.title')}
          caption={t('withdrawFunds.caption')}
        />
        <Tabs>
          <Tabs.Tab title="XLM" fluid>
            <Pane.Section>
              <WithdrawForm asset="native" />
            </Pane.Section>
          </Tabs.Tab>
          <Tabs.Tab title="MOBI" fluid>
            <Pane.Section>
              <WithdrawForm asset="mobi" />
            </Pane.Section>
          </Tabs.Tab>
        </Tabs>
      </Pane>
    );
  }
}

export default translate()(WithdrawFunds);
