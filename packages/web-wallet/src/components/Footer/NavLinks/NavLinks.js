import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Grid from 'components/shared/Grid';
import Logo from 'components/shared/Logo';
import Link from 'components/shared/Link';
import { ListContainer, ListItem } from './styles';

class NavLinks extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Grid>
        <Grid.Row flexWrap="wrap" justifyContent={['center', 'flex-start']}>
          <Grid.Col mb={[10, 0]}>
            <Logo />
          </Grid.Col>
          <Grid.Col width={[1, 3 / 4]}>
            <ListContainer>
              <ListItem>
                <Link href="https://mobius.network/terms">
                  {t('navigation.terms')}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://mobius.network/privacy">
                  {t('navigation.privacy')}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://mobius.network/copyright">
                  {t('navigation.copyright')}
                </Link>
              </ListItem>
            </ListContainer>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  }
}

export default translate()(NavLinks);
