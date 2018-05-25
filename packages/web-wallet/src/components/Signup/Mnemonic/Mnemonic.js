import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

class Mnemonic extends Component {
  static propTypes = {
    mnemonic: string.isRequired,
  };

  markSignupCompleted = () => {
    this.props.login();
  };

  render() {
    const { mnemonic } = this.props;

    return (
      <Container>
        <Title>Mnemonic</Title>
        <p>{mnemonic}</p>
        <Link to="/onboarding" onClick={this.markSignupCompleted}>
          {'I\'ve'} written it down
        </Link>
      </Container>
    );
  }
}

export default Mnemonic;
