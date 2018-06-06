import React, { Component } from 'react';
import { array } from 'prop-types';
import { apiUrl } from 'utils';

import DappItem from './DappItem';
import { Container, Title } from './styles';

class DappList extends Component {
  static propTypes = {
    apps: array,
  };

  componentDidMount() {
    this.props.fetchStart({
      name: 'apps',
      payload: `${apiUrl}/app_store/all`,
    });
  }

  render() {
    const { apps } = this.props;

    return (
      <Container>
        <Title>DappList</Title>

        {!apps && <p>Loading</p>}

        {apps && apps.map(app => <DappItem key={app.id} {...app} />)}
      </Container>
    );
  }
}

export default DappList;
