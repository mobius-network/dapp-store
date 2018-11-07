import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from 'components/shared/Grid';
import Link from 'components/shared/Link';
import Logo from 'components/shared/Logo';
import ActionsDropdown from './ActionsDropdown';
import { Container, ListContainer, ListItem } from './styles';

class Header extends Component {
  static propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
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
          <Link theme={this.getLinkTheme()} to="/login">
            {t('navigation.login')}
          </Link>
        </ListItem>
        <ListItem>
          <Link theme={this.getLinkTheme()} to="/signup">
            {t('navigation.signUp')}
          </Link>
        </ListItem>
      </Fragment>
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Container>
        <Grid>
          <Grid.Row alignItems={['center']} flexWrap="wrap">
            <Grid.Col width={[1, 1 / 3]}>
              <Logo withName />
            </Grid.Col>

            <Grid.Col px={[0, 2]} width={[1, 2 / 3]}>
              <ListContainer>
                <ListItem>
                  <Link theme={this.getLinkTheme()} to="/">
                    {t('navigation.browseDapps')}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://docs.mobius.network"
                    theme={this.getLinkTheme()}
                  >
                    {t('navigation.developers.developers')}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://docs.mobius.network/docs/submitting-a-dapp"
                    theme={this.getLinkTheme()}
                  >
                    {t('navigation.submitDapp')}
                  </Link>
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
