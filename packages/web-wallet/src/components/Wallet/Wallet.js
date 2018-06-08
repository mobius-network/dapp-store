import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import Balance from './Balance';
import AddFunds from './AddFunds';
import WithdrawFunds from './WithdrawFunds';
import { Container, Title } from './styles';

class Wallet extends Component {
  render() {
    return (
      <Container>
        <Title>side menu</Title>
        <Link to="/wallet">Wallet Balance</Link>
        <Link to="/wallet/add">Add Funds</Link>
        <Link to="/wallet/withdraw">Withdraw Funds</Link>

        <Switch>
          <PrivateRoute path="/wallet" component={Balance} exact />
          <PrivateRoute path="/wallet/add" component={AddFunds} exact />
          <PrivateRoute
            path="/wallet/withdraw"
            component={WithdrawFunds}
            exact
          />
        </Switch>
      </Container>
    );
  }
}

export default Wallet;
