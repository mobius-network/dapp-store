import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import { MainRow, SecondaryRow, CopyrightText } from './styles';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <MainRow>
          <Grid>
            <Row middle="md">
              <Col md={9}>
                <NavLinks />
              </Col>
            </Row>
          </Grid>
        </MainRow>
        <SecondaryRow>
          <Grid>
            <Row middle="md">
              <Col md={6}>
                <CopyrightText>
                  © 2018 Mochi, Inc. All Rights Reserved.
                </CopyrightText>
              </Col>
              <Col md={6}>
                <SocialLinks />
              </Col>
            </Row>
          </Grid>
        </SecondaryRow>
      </Fragment>
    );
  }
}
