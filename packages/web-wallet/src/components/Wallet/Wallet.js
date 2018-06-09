import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import Balance from './Balance';
import AddFunds from './AddFunds';
import WithdrawFunds from './WithdrawFunds';

class Wallet extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/wallet" component={Balance} exact />
        <PrivateRoute path="/wallet/add" component={AddFunds} exact />
        <PrivateRoute path="/wallet/withdraw" component={WithdrawFunds} exact />
      </Switch>
    );
  }
}

export default Wallet;
