import React, { Component } from 'react';
// import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

class WelcomeScreen extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>WelcomeScreen</Title>
        <Link to="/onboarding/xlm">Continue</Link>
      </Container>
    );
  }
}

export default WelcomeScreen;
