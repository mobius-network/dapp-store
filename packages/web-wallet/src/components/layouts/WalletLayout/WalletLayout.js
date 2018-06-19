import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import PrivateRoute from 'components/shared/PrivateRoute';
import Grid from 'components/shared/Grid';
import SidebarNav from 'components/shared/SidebarNav';
import Header from 'components/Header';

export default class WalletLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  render() {
    const { component: RouterComponent, ...rest } = this.props;

    return (
      <PrivateRoute
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <Grid>
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 6]}>
                  <SidebarNav title="WALLET">
                    <SidebarNav.Item to="/wallet">
                      Wallet Balance
                    </SidebarNav.Item>
                    <SidebarNav.Item to="/wallet/add">
                      Add Funds
                    </SidebarNav.Item>
                    <SidebarNav.Item to="/wallet/withdraw">
                      Withdraw Funds
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
