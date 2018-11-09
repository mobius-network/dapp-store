import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Grid from 'components/shared/Grid';
import Header from 'components/Header';
import SidebarNav from 'components/shared/SidebarNav';

class DevelopersLayout extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    t: PropTypes.func.isRequired,
  };

  render() {
    const { component: RouterComponent, t, ...rest } = this.props;

    return (
      <Route
        {...rest}
        component={matchProps => (
          <Fragment>
            <Header />

            <Grid>
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 6]}>
                  <SidebarNav title={t('developersLayout.navigationTitle')}>
                    <SidebarNav.Item to="/developers/submit">
                      {t('navigation.developers.submitDApp')}
                    </SidebarNav.Item>
                    <SidebarNav.Item href="https://docs.mobius.network">
                      {t('navigation.developers.documentation')}
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

export default DevelopersLayout;
