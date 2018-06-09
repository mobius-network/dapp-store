import React, { Component } from 'react';

import Grid from 'components/shared/Grid';
import Logo from 'components/shared/Logo';
import Link from 'components/shared/Link';
import { ListContainer, ListItem } from './styles';

export default class NavLinks extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row flexWrap="wrap" justifyContent={['center', 'flex-start']}>
          <Grid.Col mb={[10, 0]}>
            <Logo />
          </Grid.Col>
          <Grid.Col width={[1, 3 / 4]}>
            <ListContainer>
              <ListItem />
              <ListItem>
                <Link href="https://mobius.network/terms">
                  Terms of Service
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://mobius.network/privacy">Privacy</Link>
              </ListItem>
              <ListItem>
                <Link href="https://mobius.network/copyright">Copyright</Link>
              </ListItem>
            </ListContainer>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  }
}
