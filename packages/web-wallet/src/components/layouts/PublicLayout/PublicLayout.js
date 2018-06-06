import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Header from 'components/Header';

import { Content } from './styles';

export default class PublicLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
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
                    <RouterComponent {...matchProps} />
                  </Col>
                </Row>
              </Grid>
            </Content>
          </Fragment>
        )}
      />
    );
  }
}
