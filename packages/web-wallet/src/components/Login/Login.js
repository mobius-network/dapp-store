import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class Login extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>Login</Title>
      </Container>
    );
  }
}

export default Login;
