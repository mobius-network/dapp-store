import React, { Component } from 'react';
// import { string } from 'prop-types';

import AppAllocation from './AppAllocation';
import { Container, Title } from './styles';

class AppAllocations extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    const { apps } = this.props;

    return (
      <Container>
        <Title>Balance Allocation</Title>

        {apps.map(app => <AppAllocation key={app.id} app={app} />)}
      </Container>
    );
  }
}

export default AppAllocations;
