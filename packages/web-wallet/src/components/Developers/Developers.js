import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/shared/PrivateRoute';

import SubmitDapp from './SubmitDapp';
import GettingStarted from './GettingStarted';

class Developers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/developers" component={GettingStarted} exact />
        <PrivateRoute path="/developers/submit" component={SubmitDapp} exact />
      </Switch>
    );
  }
}

export default Developers;
