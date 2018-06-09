import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PrivateRoute from 'components/shared/PrivateRoute';
import Grid from 'components/shared/Grid';
import Header from 'components/Header';

import { Container, Content, Menu, MenuItem, MenuTitle } from './styles';

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
          <Container>
            <Header />

            <Content>
              <Grid>
                <Grid.Row>
                  <Grid.Col width={[1, 1, 1 / 6]}>
                    <Menu>
                      <MenuTitle>Wallet</MenuTitle>
                      <MenuItem to="/wallet">Wallet Balance</MenuItem>
                      <MenuItem to="/wallet/add">Add Funds</MenuItem>
                      <MenuItem to="/wallet/withdraw">Withdraw Funds</MenuItem>
                    </Menu>
                  </Grid.Col>
                  <Grid.Col width={[1, 1, 5 / 6]}>
                    <RouterComponent {...matchProps} />
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </Content>
          </Container>
        )}
      />
    );
  }
}
