import React, { Component } from 'react';

import Logo from 'components/shared/Logo';
import Link from 'components/shared/Link';
import { ListContainer, ListItem } from './styles';

export default class NavLinks extends Component {
  render() {
    return (
      <ListContainer>
        <ListItem>
          <Logo />
        </ListItem>
        <ListItem>
          <Link href="https://mobius.network/terms">Terms of Service</Link>
        </ListItem>
        <ListItem>
          <Link href="https://mobius.network/privacy">Privacy</Link>
        </ListItem>
        <ListItem>
          <Link href="https://mobius.network/copyright">Copyright</Link>
        </ListItem>
      </ListContainer>
    );
  }
}
