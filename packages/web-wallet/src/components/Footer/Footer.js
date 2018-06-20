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
            <Grid.Row
              alignItems={['flex-start', 'center']}
              mb={10}
              flexWrap="wrap"
            >
              <Grid.Col width={[1, 1, 1 / 2]}>
                <CopyrightText>
                  © 2018 Mochi, Inc. All Rights Reserved.
                </CopyrightText>
              </Grid.Col>
              <Grid.Col width={[1, 1, 1 / 2]}>
                <SocialLinks />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={1}>
                <CopyrightText>
                  MOBIUS™, the MOBIUS logo, MOBI™, and The DApp Store™ are
                  trademarks of Mochi, Inc. Product names, logos, and other
                  trademarks referred to within mobius.network are the property
                  of their respective trademark owners, as applicable. The
                  owners of any such trademarks are not affiliated with Mobius
                  or our products and services.
                </CopyrightText>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </SecondaryRow>
      </Fragment>
    );
  }
}
