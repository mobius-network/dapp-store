import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          caption={t('withdrawFunds.caption')}
          title={t('withdrawFunds.title')}
        />
        <Tabs>
          <Tabs.Tab fluid title="XLM">
            <Pane.Section>
              <WithdrawForm asset="native" />
            </Pane.Section>
          </Tabs.Tab>
          <Tabs.Tab fluid title="MOBI">
            <Pane.Section>
              <WithdrawForm asset="mobi" />
            </Pane.Section>
          </Tabs.Tab>
        </Tabs>
      </Pane>
    );
  }
}

export default WithdrawFunds;
