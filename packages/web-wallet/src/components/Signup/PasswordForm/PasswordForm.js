import React, { Component } from 'react';
// import { string } from 'prop-types';

import { Container, Title } from './styles';

class PasswordForm extends Component {
  static propTypes = {
    // name: string.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>PasswordForm</Title>
      </Container>
    );
  }
}

export default PasswordForm;
