import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Header from 'components/Header';

import { Content } from './styles';

const PublicLayout = ({ component: Component, ...rest }) => (
  <DefaultLayout
    redirectTo="/"
    checkEqualityTo={false}
    {...rest}
    component={matchProps => (
      <Fragment>
        <Header />

        <Content>
          <Grid>
            <Row center="md">
              <Col md={6}>
                <Component {...matchProps} />
              </Col>
            </Row>
          </Grid>
        </Content>
      </Fragment>
    )}
  />
);

PublicLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default PublicLayout;
