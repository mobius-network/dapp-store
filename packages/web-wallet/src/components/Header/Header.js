import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from 'components/shared/Grid';
import Link from 'components/shared/Link';
import Logo from 'components/shared/Logo';
import Dropdown from 'components/shared/Dropdown';
import { Container, ListContainer, ListItem } from './styles';

class Header extends Component {
  static propTypes = {
    theme: PropTypes.oneOf(['default', 'dark']),
  };

  static defaultProps = {
    theme: 'default',
  };

  renderSessionActions() {
    const { isAuthorized, logout, theme } = this.props;

    if (isAuthorized) {
      return (
        <ListItem>
          <Dropdown theme={theme}>
            <Dropdown.Toggle>sdjkhjksh</Dropdown.Toggle>
            <Dropdown.Menu align="right">
              <Dropdown.Item to="/wallet">Wallet Balance</Dropdown.Item>
              <Dropdown.Item to="/wallet/add">Add Funds</Dropdown.Item>
              <Dropdown.Item to="/wallet/withdraw">
                Transfer Funds
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListItem>
      );
    }

    return (
      <Fragment>
        <ListItem>
          <Link to="/login">Login</Link>
        </ListItem>
        <ListItem>
          <Link to="/signup">Sign Up</Link>
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
                  <Link to="/developers">Developers</Link>
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
