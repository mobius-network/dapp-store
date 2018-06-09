import React, { Component } from 'react';

import Grid from 'components/shared/Grid';

import AssetAllocation from './AssetAllocation';
import AppAllocations from './AppAllocations';
import { Container } from './styles';

class Balance extends Component {
  componentDidMount() {
    this.props.loadApps();
  }

  render() {
    const { appsLoaded } = this.props;

    if (!appsLoaded) {
      return <Container>...loading</Container>;
    }

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col width={[1, 1 / 2]}>
            <AssetAllocation asset="mobi" gradient="left" />
          </Grid.Col>
          <Grid.Col width={[1, 1 / 2]}>
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
