import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import PrivateRoute from 'components/shared/PrivateRoute';
import Grid from 'components/shared/Grid';
import SidebarNav from 'components/shared/SidebarNav';
import Header from 'components/Header';

class WalletLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    t: PropTypes.func.isRequired,
  };

  render() {
    const { component: RouterComponent, t, ...rest } = this.props;

    return (
      <PrivateRoute
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <Grid>
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 6]}>
                  <SidebarNav title={t('walletLayout.navigationTitle')}>
                    <SidebarNav.Item to="/wallet">
                      {t('navigation.wallet.balance')}
                    </SidebarNav.Item>
                    <SidebarNav.Item to="/wallet/add">
                      {t('navigation.wallet.addFunds')}
                    </SidebarNav.Item>
                    <SidebarNav.Item to="/wallet/withdraw">
                      {t('navigation.wallet.withdrawFunds')}
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

export default translate()(WalletLayout);
