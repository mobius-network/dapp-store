import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Grid from 'components/shared/Grid';
import Header from 'components/Header';
import SidebarNav from 'components/shared/SidebarNav';

export default class DevelopersLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <Route
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <Grid>
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 6]}>
                  <SidebarNav title="DEVELOPERS">
                    <SidebarNav.Item to="/developers">My Dapps</SidebarNav.Item>
                    <SidebarNav.Item to="/developers/start">
                      Getting Started
                    </SidebarNav.Item>
                  </SidebarNav>
                </Grid.Col>
                <Grid.Col width={[1, 1, 5 / 6]}>
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
