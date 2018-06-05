import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
          <Row middle="xs">
            <Col xs>
              <Logo withName />
            </Col>
            <Col xs>
              <ListContainer>
                <ListItem>
                  <Link to="/">Browse DApps</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Developers</Link>
                </ListItem>

                {this.renderSessionActions()}
              </ListContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default Header;
