import React, { Component } from 'react';

import Grid from 'components/shared/Grid';
import Pane from 'components/shared/Pane';
import AppAllocation from './AppAllocation';
import { AppsList } from './styles';

class AppAllocations extends Component {
  render() {
    const { apps } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header
          title="Balance Allocation"
          caption="These are the DApps that you’ve transferred MOBI to but haven’t spent yet.
            Release a DApp balance if you’d like to return the coins to your primary balance."
        />
        <AppsList>
          <Grid>
            <Grid.Row flexWrap="wrap">
              {apps.map(app => <AppAllocation app={app} key={app.id} />)}
            </Grid.Row>
          </Grid>
        </AppsList>
      </Pane>
    );
  }
}

export default AppAllocations;
