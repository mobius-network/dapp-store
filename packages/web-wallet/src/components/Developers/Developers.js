import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/shared/PrivateRoute';

import MyDapps from './MyDapps';
import SubmitDapp from './SubmitDapp';
import EditDapp from './EditDapp';

class Developers extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/developers/my" component={MyDapps} exact />
        <PrivateRoute
          path="/developers/my/:id/edit"
          component={EditDapp}
          exact
        />
        <PrivateRoute path="/developers/submit" component={SubmitDapp} exact />
      </Switch>
    );
  }
}

export default Developers;
