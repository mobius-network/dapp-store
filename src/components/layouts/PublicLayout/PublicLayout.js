import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import PublicRoute from 'components/shared/PublicRoute';
import Grid from 'components/shared/Grid';
import Header from 'components/Header';

export default class PublicLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <PublicRoute
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <Grid>
              <Grid.Row justifyContent="center">
                <Grid.Col width={[1, 1, 1 / 2]}>
                  <RouterComponent {...matchProps} />
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Fragment>
        )}
      />
    );
  }
}
