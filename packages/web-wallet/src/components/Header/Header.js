import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimpleCard } from '@mobius-network/components';

import { Container, Title } from './styles';

class Header extends Component {
  renderContent() {
    const { isAuthorized, logout } = this.props;

    if (isAuthorized) {
      return <button onClick={logout}>Logout</button>;
    }

    return (
      <Container>
        <Link to="/login">Login </Link>
        <Link to="/signup">Signup</Link>
      </Container>
    );
  }

  render() {
    return (
      <Container>
        <SimpleCard color="gray" title="Header">
          <Title>
            <Link to="/">Mobius</Link>
          </Title>
          {this.renderContent()}
        </SimpleCard>
      </Container>
    );
  }
}

export default Header;
