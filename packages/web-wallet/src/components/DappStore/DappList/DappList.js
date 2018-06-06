import React, { Component } from 'react';
// import { string } from 'prop-types';
import { apiUrl } from 'utils';

import { Container, Title } from './styles';

class DappList extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  componentDidMount() {
    this.props.fetchStart({
      name: 'apps',
      payload: `${apiUrl}/app_store/all`,
    });
  }

  render() {
    return (
      <Container>
        <Title>DappList</Title>
      </Container>
    );
  }
}

export default DappList;
