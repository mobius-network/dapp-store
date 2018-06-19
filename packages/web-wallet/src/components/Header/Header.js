import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from 'components/shared/Grid';
import Link from 'components/shared/Link';
import Logo from 'components/shared/Logo';
import ActionsDropdown from './ActionsDropdown';
import { Container, ListContainer, ListItem } from './styles';

class Header extends Component {
  static propTypes = {
    theme: PropTypes.oneOf(['default', 'dark']),
  };

  static defaultProps = {
    theme: 'default',
  };

  getLinkTheme = () => (this.props.theme === 'dark' ? 'light' : 'default');

  renderSessionActions() {
    const { isAuthorized, theme } = this.props;

    if (isAuthorized) {
      return (
        <ListItem>
          <ActionsDropdown theme={theme} />
        </ListItem>
      );
    }

    return (
      <Fragment>
        <ListItem>
          <Link to="/login" theme={this.getLinkTheme()}>
            Login
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/signup" theme={this.getLinkTheme()}>
            Sign Up
          </Link>
        </ListItem>
      </Fragment>
    );
  }

  render() {
    const { isAuthorized } = this.props;

    return (
      <Container>
        <Grid>
          <Grid.Row alignItems={['center']} flexWrap="wrap">
            <Grid.Col width={[1, 1 / 3]}>
              <Logo withName />
            </Grid.Col>

            <Grid.Col width={[1, 2 / 3]} px={[0, 2]}>
              <Grid.Row alignItems={['center']} flexWrap="wrap" pt={[10, 0]}>
                <Grid.Col
                  justifyContent={['flex-end']}
                  width={['auto', 1 / 2]}
                  pr={[0, 25]}
                >
                  <ListContainer>
                    <ListItem>
                      <Link to="/" theme={this.getLinkTheme()}>
                        Browse DApps
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/developers" theme={this.getLinkTheme()}>
                        Developers
                      </Link>
                    </ListItem>
                  </ListContainer>
                </Grid.Col>

                <Grid.Col
                  width={['auto', 1 / 2]}
                  pt={[isAuthorized ? 10 : 0, 0]}
                >
                  <ListContainer>{this.renderSessionActions()}</ListContainer>
                </Grid.Col>
              </Grid.Row>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Header;
