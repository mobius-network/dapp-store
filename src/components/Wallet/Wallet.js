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
        <PrivateRoute component={Balance} exact path="/wallet" />
        <PrivateRoute component={AddFunds} exact path="/wallet/add/:asset?" />
        <PrivateRoute component={WithdrawFunds} exact path="/wallet/withdraw" />
      </Switch>
    );
  }
}

export default Wallet;
