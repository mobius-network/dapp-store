import React, { Component } from 'react';

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
      <Container>
        <Container>
          <AssetAllocation asset="mobi" />
          <AssetAllocation asset="native" />
        </Container>

        <AppAllocations />
      </Container>
    );
  }
}

export default Balance;
