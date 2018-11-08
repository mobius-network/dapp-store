import React, { Component } from 'react';

import Grid from 'components/shared/Grid';

import AssetAllocation from './AssetAllocation';
import AppAllocations from './AppAllocations';

class Balance extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row flexWrap="wrap">
          <Grid.Col mb={4} width={[1, 1, 1 / 2]}>
            <AssetAllocation asset="mobi" gradient="left" />
          </Grid.Col>
          <Grid.Col mb={4} width={[1, 1, 1 / 2]}>
            <AssetAllocation asset="native" gradient="right" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col width={1}>
            <AppAllocations />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Balance;
