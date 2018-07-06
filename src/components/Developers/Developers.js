import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/shared/PrivateRoute';

import SubmitDapp from './SubmitDapp';
import GettingStarted from './GettingStarted';

class Developers extends Component {
  render() {
    return (
      <Switch>
        <Route component={GettingStarted} exact path="/developers" />
        <PrivateRoute component={SubmitDapp} exact path="/developers/submit" />
      </Switch>
    );
  }
}

export default Developers;
