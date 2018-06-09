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
              {apps.map(app => (
                <Grid.Col key={app.id} width={[1, 1 / 3]} px={0}>
                  <AppAllocation app={app} />
                </Grid.Col>
              ))}
            </Grid.Row>
          </Grid>
        </AppsList>
      </Pane>
    );
  }
}

export default AppAllocations;
