import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title, LoginForm } from './styles';

class Login extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>Login</Title>
        <LoginForm />
      </Container>
    );
  }
}

export default Login;
