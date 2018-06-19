import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';

import MyDapps from './MyDapps';
// import SubmitDapp from './SubmitDapp';
import GettingStarted from './GettingStarted';

class Developers extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute
          path="/developers"
          redirectTo="/login"
          component={MyDapps}
          exact
        />
        <Route path="/developers/start" component={GettingStarted} />
      </Switch>
    );
  }
}

export default Developers;
