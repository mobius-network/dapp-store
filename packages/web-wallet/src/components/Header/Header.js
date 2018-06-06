import React, { Component, Fragment } from 'react';

import Grid from 'components/shared/Grid';
import Button from 'components/shared/Button';
import Link from 'components/shared/Link';
import Logo from 'components/shared/Logo';
import { Container, ListContainer, ListItem } from './styles';

class Header extends Component {
  renderSessionActions() {
    const { isAuthorized, logout } = this.props;

    if (isAuthorized) {
      return (
        <ListItem>
          <Button onClick={logout} theme="secondary">
            Logout
          </Button>
        </ListItem>
      );
    }

    return (
      <Fragment>
        <ListItem>
          <Link to="/login">Login </Link>
        </ListItem>
        <ListItem>
          <Link to="/signup">Signup</Link>
        </ListItem>
      </Fragment>
    );
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row alignItems={['center']} flexWrap="wrap">
            <Grid.Col width={[1, 1 / 2]}>
              <Logo withName />
            </Grid.Col>
            <Grid.Col width={[1, 1 / 2]}>
              <ListContainer>
                <ListItem>
                  <Link to="/">Browse DApps</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Developers</Link>
                </ListItem>

                {this.renderSessionActions()}
              </ListContainer>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Header;
