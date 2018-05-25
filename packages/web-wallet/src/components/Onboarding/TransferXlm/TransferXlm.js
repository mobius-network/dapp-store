import React, { Component } from 'react';
// import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

class TransferXlm extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>TransferXlm</Title>
        <Link to="/onboarding/mobi">Continue</Link>
      </Container>
    );
  }
}

export default TransferXlm;
