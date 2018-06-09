import React, { Component } from 'react';

import Pane from 'components/shared/Pane';
import Tabs from 'components/shared/Tabs';
import WithdrawForm from './WithdrawForm';

class WithdrawFunds extends Component {
  render() {
    return (
      <Pane theme="narrow">
        <Pane.Header
          title="Withdraw Funds"
          caption="Transfer to an external wallet."
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

export default WithdrawFunds;
