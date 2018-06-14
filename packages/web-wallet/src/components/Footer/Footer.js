import React, { Component, Fragment } from 'react';

import Grid from 'components/shared/Grid';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import { MainRow, SecondaryRow, CopyrightText } from './styles';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <MainRow>
          <Grid>
            <Grid.Row alignItems={['flex-start', 'center']}>
              <Grid.Col width={[1, 3 / 4]}>
                <NavLinks />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </MainRow>
        <SecondaryRow>
          <Grid>
            <Grid.Row alignItems={['flex-start', 'center']} flexWrap="wrap">
              <Grid.Col width={[1, 1, 1 / 2]}>
                <CopyrightText>
                  © 2018 Mochi, Inc. All Rights Reserved.
                </CopyrightText>
              </Grid.Col>
              <Grid.Col width={[1, 1, 1 / 2]}>
                <SocialLinks />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </SecondaryRow>
      </Fragment>
    );
  }
}
