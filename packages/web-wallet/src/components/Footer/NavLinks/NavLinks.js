import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Link from 'components/shared/Link';
import { ListContainer, ListItem } from './styles';

class NavLinks extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
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
    );
  }
}

export default translate()(NavLinks);
