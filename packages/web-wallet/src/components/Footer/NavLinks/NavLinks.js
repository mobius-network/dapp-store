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
          <Link href="#">Terms of Service</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Privacy</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Copyright</Link>
        </ListItem>
      </ListContainer>
    );
  }
}
