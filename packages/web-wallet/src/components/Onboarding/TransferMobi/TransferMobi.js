import React, { Component } from 'react';
// import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

class TransferMobi extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>TransferMobi</Title>
        <Link to="/">Browse DApp store</Link>
      </Container>
    );
  }
}

export default TransferMobi;
