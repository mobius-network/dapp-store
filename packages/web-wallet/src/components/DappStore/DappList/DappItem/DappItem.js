import React, { Component } from 'react';
import { string } from 'prop-types';

import { Container, Title } from './styles';

class DappItem extends Component {
  static propTypes = {
    name: string.isRequired,
  };

  render() {
    const { name } = this.props;

    return (
      <Container>
        <Title>{name}</Title>
      </Container>
    );
  }
}

export default DappItem;
