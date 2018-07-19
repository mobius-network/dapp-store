import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from 'components/shared/Grid';
import Link from 'components/shared/Link';
import Logo from 'components/shared/Logo';
import ActionsDropdown from './ActionsDropdown';
import { Container, ListContainer, ListItem } from './styles';

class Header extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['default', 'dark']),
  };

  static defaultProps = {
    theme: 'default',
  };

  getLinkTheme = () => (this.props.theme === 'dark' ? 'light' : 'default');

  renderSessionActions() {
    const { isAuthorized, t, theme } = this.props;

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
            {t('navigation.login')}
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/signup" theme={this.getLinkTheme()}>
            {t('navigation.signUp')}
          </Link>
        </ListItem>
      </Fragment>
    );
  }

  render() {
    const { isAuthorized, t } = this.props;

    return (
      <Container>
        <Grid>
          <Grid.Row alignItems={['center']} flexWrap="wrap">
            <Grid.Col width={[1, 1 / 3]}>
              <Logo withName />
            </Grid.Col>

            <Grid.Col width={[1, 2 / 3]} px={[0, 2]}>
              <ListContainer>
                <ListItem>
                  <Link to="/" theme={this.getLinkTheme()}>
                    {t('navigation.browseDapps')}
                  </Link>
                </ListItem>
                <ListItem>
                  {isAuthorized ? (
                    <Link to="/developers/submit" theme={this.getLinkTheme()}>
                      {t('navigation.developers.developers')}
                    </Link>
                  ) : (
                    <Link
                      href="https://docs.mobius.network"
                      theme={this.getLinkTheme()}
                    >
                      {t('navigation.developers.developers')}
                    </Link>
                  )}
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
